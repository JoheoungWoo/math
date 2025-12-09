import os
import shutil
import random
import cv2
from ultralytics import YOLO

# ==========================================
# 1. 사용자 설정
# ==========================================
RAW_DIR = "dataset_raw"  # 원본 이미지 폴더
OUTPUT_DIR = "dataset"          # YOLO용 데이터 폴더
TRAIN_RATIO = 0.8               # train / val split

CLASSES = ["이경규", "이재명", "유재석"]   # 원하는 클래스명 리스트


# ==========================================
# 2. YOLO 폴더 구조 생성
# ==========================================
def create_yolo_dirs():
    for sub in ["images/train", "images/val", "labels/train", "labels/val"]:
        os.makedirs(os.path.join(OUTPUT_DIR, sub), exist_ok=True)


# ==========================================
# 3. 파일명 기반 클래스 자동 인식
# ==========================================
def get_class_from_filename(filename):
    for idx, name in enumerate(CLASSES):
        if name in filename:
            return idx
    return None


# ==========================================
# 4. YOLO 라벨 생성 함수
# ==========================================
def save_yolo_label(txt_path, class_id, box, img_w, img_h):
    x1, y1, x2, y2 = box
    x_center = (x1 + x2) / 2 / img_w
    y_center = (y1 + y2) / 2 / img_h
    width = (x2 - x1) / img_w
    height = (y2 - y1) / img_h

    with open(txt_path, "w", encoding="utf-8") as f:
        f.write(f"{class_id} {x_center} {y_center} {width} {height}\n")


# ==========================================
# 5. YOLO 얼굴 탐지 모델로 bounding box 자동 생성
# ==========================================
def preprocess():
    print("📌 YOLO 얼굴 탐지 모델 로딩 중...")
    face_model = YOLO("yolov8n-face.pt")  # YOLO 얼굴 검출 모델(경량)

    create_yolo_dirs()
    files = [f for f in os.listdir(RAW_DIR) if f.lower().endswith(("jpg", "jpeg", "png"))]
    random.shuffle(files)

    train_cutoff = int(len(files) * TRAIN_RATIO)

    for idx, file in enumerate(files):
        class_id = get_class_from_filename(file)
        if class_id is None:
            print(f"⚠ 클래스명을 파일명에서 찾을 수 없음 → {file}")
            continue

        img_path = os.path.join(RAW_DIR, file)
        img = cv2.imread(img_path)

        if img is None:
            print(f"⚠ 이미지 로딩 실패 → {file}")
            continue

        img_h, img_w = img.shape[:2]

        # 얼굴 검출
        results = face_model(img, verbose=False)
        boxes = results[0].boxes.xyxy.cpu().numpy() if results[0].boxes is not None else []

        if len(boxes) == 0:
            print(f"⚠ 얼굴 없음 → {file}")
            continue

        # 첫 번째 얼굴만 사용
        box = boxes[0]
        x1, y1, x2, y2 = map(float, box)

        split = "train" if idx < train_cutoff else "val"

        # 이미지 복사
        dest_img_path = os.path.join(OUTPUT_DIR, f"images/{split}/{file}")
        shutil.copy(img_path, dest_img_path)

        # 라벨 저장
        dest_txt_path = os.path.join(OUTPUT_DIR, f"labels/{split}/{file.rsplit('.', 1)[0]}.txt")
        save_yolo_label(dest_txt_path, class_id, (x1, y1, x2, y2), img_w, img_h)

        print(f"✔ 자동 라벨링 완료 → {dest_txt_path}")


# ==========================================
# 6. dataset.yaml 생성
# ==========================================
def create_yaml():
    yaml_path = os.path.join(OUTPUT_DIR, "dataset.yaml")
    with open(yaml_path, "w", encoding="utf-8") as f:
        f.write(f"""
path: {OUTPUT_DIR}
train: images/train
val: images/val

names:
  0: "{CLASSES[0]}"
  1: "{CLASSES[1]}"
  2: "{CLASSES[2]}"
""")
    print(f"📄 YAML 생성 완료 → {yaml_path}")
    return yaml_path


# ==========================================
# 7. YOLO 모델 학습 자동 실행
# ==========================================
def train_yolo(yaml_path):
    model = YOLO("yolo11n.pt")   # 원하는 YOLO11 모델: yolo11n/s/m/l 선택 가능
    model.train(
        data=yaml_path,
        epochs=50,
        imgsz=640,
        batch=8
    )


# ==========================================
# 실행
# ==========================================
if __name__ == "__main__":
    preprocess()
    yaml_file = create_yaml()
    train_yolo(yaml_file)
