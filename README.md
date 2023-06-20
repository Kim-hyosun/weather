# Weather(케이웨더)

---

웹사이트 [케이웨더](https://weather.kweather.co.kr/)의 현재, 오늘, 내일, 모래의 날씨와 미세먼지 정보를 보여주는 기능 구현
최하단 구현 사이트 바로가기 링크있습니다!

# 1.  목표

---

> 프로젝트를 시작하게 된 이야기 :
> 
> 
> 일상적으로 가장 많이 이용하는 정보를 웹 뿐 아니라 모바일에서도 볼 수 있도록 구현하고 싶었습니다.
> 

> **1.   실시간 오픈 API ‘openweathermap’를 통해 받은 JSON 데이터를 내가 원하는 대로 활용하기**
> 

> **2.   React의 Component와 Router, Props 등 기본에 충실해보기**
> 

> **3.   반응형 작업하기**

<br/>
<br/>
<br/>

# 2.  디렉토리 구조

---

### 폴더 구성
![Untitled](https://user-images.githubusercontent.com/113571272/221362996-9487dd4f-d1c6-4e53-9878-ac91ec728d2e.png)



### 세부 Component 구성

![Untitled (1)](https://user-images.githubusercontent.com/113571272/221363012-898fc6af-00fe-47da-bd9e-3b99c280d72a.png)

<br/>
<br/>
<br/>

# 3.  사용 기술

---

### 👍 UI Design  **:  React / axios / JSON / SCSS / Router**

### 👍 U**sed Tools   :**  GitHub / Visual Studio Code / Figma
<br/>
<br/>
<br/>

# 4.  페이지 구성

---

## Router를 통해 component 바꾸어 4개 시점 데이터 확인 가능   (SPA)

<aside>
💡 **현재, 오늘, 내일, 모레 시점의 전국 날씨와 전국 미세 먼지 데이터를 확인할 수 있음**

페이지 하단 Nav바를 이용하여 이동

![Untitled (2)](https://user-images.githubusercontent.com/113571272/221363036-f59abd6f-304d-4e82-a08b-8aaa95eea9db.png)


</aside>
<br/>
<br/>
<br/>

# 5.  문제 및 해결 과정

---

## 🔥 최초 랜더링 시 ‘현재’ nav버튼에 배경 컬러가 없다?!

<aside>
💡 초반엔 Link 의 클릭 시 value를 비교하여 일치하면 클래스 자를 부여하는 방법을 썼는데

ㄴ 최초 랜더링 시에는 클릭 요소가 없기 때문에 작동하지 않았다. 

**⇒ NavLink의 boolean속성을 이용한 activestyle로 해결**

</aside>

## 🔥  axios multi request가 작동하지 않는다?!

<aside>
💡 **⇒ 공식 문서 가이드대로 변경하여 해결**

</aside>

> ***작동하지 않았을 때의 코드 작성 예시  ⇒  axios가 이터러블 하지 않다는데 이터러블이 뭐죠…?반복 …?ㅠ)***
> 
> 
> ```bash
> export const Data = () => {
>   const [data, setData] = useState([]);
> 
>   useEffect(() => {
>     const URL1 = `APIURL1`;
> 		const URL2 = `APIURL2`;
> 
>     axios
>       .all([axios.get(URL1), axios.get(URL2)])
>       .then(res1, res2 => {
>       let RES1 = res1;
>       let RES2 = res2;
>       let res = [..RES1,...RES2]
>         setData(res)
>       })
>       .catch(err => {
>         console.log(err)
>       })
>   }, []);
>   return data;
> }
> ```
> 

> ***MDN문서 & npm 공식사이트 참고하여 고친 코드 예시***
> 
> 
> ```bash
> export const Data = () => {
>   const [data, setData] = useState([]);
> 
>   useEffect(() => {
> 		Promise.all([p1, p2, p3, p4, p5])
> 					 .then(values => {
> 									  setData(values);
> 								 })
> 					 .catch(error => {
> 									  console.log(err)
> 								 });
> 	}, []);
>   return data;
> }
> ```
> 
> [참고 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
> 

## 🔥 내가 넣고 싶은 데이터와 JSON데이터를 조합하여 화면에 나타내고 싶은데…

<aside>
💡 내가 사용한 API는 ‘openweathermap’ 으로 해외 사이트이기 때문에 우리나라 지명이 모두 영문 표기가 되었다.

날씨 API의 데이터와 내가 작성한 한국어 지명을 함께 화면에 나타내고 싶었다.

 

**⇒ 내가 작성한 데이터(cities)는 상위 component에서 map을 돌리고,** 

**JSON 데이터 처리 될 하위 component를 map안에 넣어 내 데이터를 props로 내려서 해결!**

</aside>

> cities는 내가 작성한 데이터 🙂 const cities = […]
> 

```
{
        cities.map((cities, idx) => <div key={cities.id}>
          <div className="title">{cities.한국어지역명}</div>
          <WeatherDataInfo key={cities.id} cities={cities} />
        </div>
        )
      }
```

## 🔥 JSON의 특정 데이터 값만 가져오고 싶은데…

<aside>
💡  ‘openweathermap’에서 제공하는 미세 먼지 데이터 중 대기 농도가 나쁨인지 좋음인지 나타내는 지수만 필요했다.

axios 로 받아온 데이터는 전국의 대기에 대한 모든 데이터의 합이었다. 

이 데이터를 그대로 props로 보내서, 하위 component에서 점 표기법으로 특정 값에 접근하니 typeError가 났다.  

 

**⇒ JSON data를 받은 axios안에서 JSON데이터 하위로 접근하여 state에 저장 후 하위component에게 props로 전달하여 해결**

</aside>

> props를 받은 하위 component에서 JSON 특정 요소로 접근 (실패)
> 

```
<div>{values[0].data.list[0].main.aqi;}</div>
```

> 상위 component에서 state에 저장한 상태로 props전달 (성공)
> 

```
const [pollution, setPollution] = useState([]);
let aqi = values[0].data.list[0].main.aqi;
setPollution(aqi);
  
```

<br/>
<br/>
<br/>

# 6.  개인 리뷰

---

<aside>
☂️ React 초기 셋팅 시 어떻게 Component 를 구성할지, Router는 어떻게 처리 해서 화면에 보여줄 것 인지가 가장 막막했다.

시작한 후에는, 전국 날씨 정보를 한 화면에 싣기 위해 많은 정보를 불러올 때 axios를 어떻게 활용해야 할지, 불러온 데이터와 한국어 지명을 섞어서 어떻게 화면에 보여줄 수 있는지에 대한 고민의 시간이 가장 길었다. 

axios multiple request같은 경우에는 검색을 많이 했다. 모든 블로그 기타 자료에 axios.all을 하면 된다 했는데 안되어서 정말이지 한나절을 고민했었다. 그런데 공식 문서를 찾아보던 중  promise.all 을 써야 하고 반환 받을 때 스프레드 연산자를 쓰지 않아도 된다고 했다. 

적용하니 바로 해결되었다. 

역시 공식 문서를 항상 먼저 찾아보고 그 다음 다른 자료를 보아야 한다는 것을 다시 한번 느꼈다. 

현재 이용한 API는 해외에서 지원하는 데이터인데, 날씨 같은 정보는 현지 API를 이용하는 것이 좋다는 생각이 들기도 했다. 

날씨 정보는 데스크탑에서 접근하기보다 모바일 기기에서 접근할 비율이 많은 것으로 생각 되어 모바일에서 보기 편하도록 반응형으로 작업하였다.  

</aside>

<br/>
<br/>
<br/>

# 작업한 날씨예보 사이트 바로가기

# [날씨와 미세먼지](https://kim-hyosun.github.io/weather/)
