import requests

res = requests.get("https://news.naver.com/")
print(res.text)