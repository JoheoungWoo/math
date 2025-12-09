import os
import cv2
from ultralytics import YOLO

# ============================================
# 1. Load trained model
# ============================================
model = YOLO("runs/detect/train/weights/best.pt")

# ============================================
# 2. Folder containing test images
# ============================================
TEST_DIR = "test_images"
RESULT_DIR = "../results"
os.makedirs(RESULT_DIR, exist_ok=True)

# ============================================
# 3. English class names
# ============================================
CLASSES = ["KyungKyu", "LeeJaeMyung", "YooJaeSuk"]

# ============================================
# 4. Predict on all images
# ============================================
files = [f for f in os.listdir(TEST_DIR) if f.lower().endswith(("jpg", "jpeg", "png"))]

for file in files:
    img_path = os.path.join(TEST_DIR, file)
    img = cv2.imread(img_path)

    if img is None:
        print(f"⚠ Could not load image: {file}")
        continue

    # Model prediction
    results = model(img)

    for r in results:
        boxes = r.boxes

        if boxes is None or len(boxes) == 0:
            print(f"❌ No face detected → {file}")
            continue

        for box in boxes:
            cls = int(box.cls[0])
            name = CLASSES[cls]
            conf = float(box.conf[0])

            # Bounding box coordinates
            x1, y1, x2, y2 = map(int, box.xyxy[0])

            # Draw bounding box
            cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)

            # Draw label
            cv2.putText(
                img, f"{name} ({conf:.2f})",
                (x1, y1 - 10),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.8, (0, 255, 0), 2
            )

            print(f"✔ {file} → Prediction: {name}  (Confidence: {conf:.2f})")

    # Save result image
    out_path = os.path.join(RESULT_DIR, file)
    cv2.imwrite(out_path, img)
    print(f"💾 Saved: {out_path}\n")

print("🎉 All predictions complete!")
