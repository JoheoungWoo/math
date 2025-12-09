from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import time

# 크롬 드라이버 실행
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# 수집한 이미지 저장 리스트
all_images = []

# 섹션 번호 범위
start_section = 100
end_section = 110   # 원하는 만큼 조절

for section in range(start_section, end_section + 1):
    url = f"https://news.naver.com/section/{section}"
    print("\n==============================")
    print(f"📌 현재 섹션: {url}")
    print("==============================")

    try:
        driver.get(url)
        time.sleep(2)  # 페이지 로딩 대기

        # 모든 <img> 태그 검색
        images = driver.find_elements(By.TAG_NAME, "img")


        print(f"🔍 이미지 갯수: {len(images)}")

        for img in images:
            src = img.get_attribute("src")
            if src and src.startswith("http"):
                all_images.append(src)
                print(src)

    except Exception as e:
        print(f"❌ 오류 발생: {e}")

print("\n=================================")
print(f"🎉 총 수집된 이미지 개수: {len(all_images)}")
print("=================================")

# 크롬 종료
driver.quit()