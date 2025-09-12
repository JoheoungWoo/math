//============================================data->products.js==========================================
//현재 이 product 파일에서 mainNavItems안에 MainPage화면 이미지 박스안에 버튼(토글이)
//생성되는 배열이 하나 존재하고 subNavItems안에 main버튼(토글)에 MainMenus 페이지 안에 작성된
//마우스 핸들러 이벤트를 작동시키면 sub데이터가 출력되는 정보를 저장중인 두번째 배열이 존재하고
//세번째 ALL_PRODUCTS 배열안의 객체에서 category로 앞의 두 main과 sub를 담당하는 배열의 데이터를
//갖고와서 MainMenu파일안의 map을 통해 각 상황별로 맞는 데이터를 출력하기 위한 3번째 배열이 존재하는데

//현재 이 형태는 main,sub,{main,sub} 이렇게 똑같은 데이터를 2번 작성하여 꺼내오는 형식이라 나중에
//코드가 방대해질시 한쪽의 배열안에 데이터를 집어넣지 못하는 경우가 발생할 수 있으므로 관리하기 어려운
//코드로서 이 중복되는 데이터를 갖고있는 3개의 배열을 축약시키거나 간소화 시기킬 수 있는 방법을 찾아
//코드를 수정 시키는게 가장 바람직한 완선된 파일로 만들 수 있음

//===========================================layout->MainMenu.js==============================================
//usestate로 상태관리를 지정하는 activeMen을 지정하고 setActiveMenu를 통해서 activeMenu의 값을 변경하는 useState코드를 만들고
//useState(null)을 넣어서 초기값을 null로 지정한 상태이다

//return문 안에 17~18디자인/ 20행에 data폴더의 products파일을 임폴트하여 mainNavItems 배열을 가지고 와서 map을 사용해 배열안에 있는
//데이터를 꺼내고 map에 대한 파라미터에 idx를 지정시킨다 23행 key값에 지정시킨 idx를 넣어 onMouseEnter핸들러로 마우스 커서가 mainNavItems위에 올라가면 acctiveMenu의 상태를 변경하는
//setActiveMenu에 파라미터 idx를 통해 mainNavItem에 대한 정보를 제공하고 onMouseLeave핸들러로 마우스가 위에서 벗어나면 setActiveMenu에 상태를 null로 다시 지정시킨다

//31행 부분에 버튼 태그로 감싼부분에 onClick 핸들러안에 onNavigate 함수를 넣어 버튼을 클릭하면 category페이지로 이동시킨다 "category", { main: idx }는 root.js 에서 지정한
//category/:idx이 부분을 적어둔 상태이고

//41행 부분은 activeMenu의 값이 idx와 같을때 실행하는 코드이며 product.js안에 있는 subNavItems배열 안에 각 상황에 맞는 데이터를 꺼내기 위한 filter를 꺼내서 필터에 대한
//파라미터에 대한 값을 sub으로 지정하고 product.js 안에 있는 ALL_PRODUCTS 배열중에 알맞는 부분을 찾기 위해 some을써서 ~~~~

//현재 이 파일을 통해서 홈페이지에 main버튼에 마우스핸들러 이벤트를 작동시키면 sub가 없는 main메뉴에서도
//빈 객체 상자 박스가 화면에 출력이 되어서 보는 입장에서 별로 불편함을 주는 형태이므로
//기존의 &&연산자에서 || 연산자로 변경을 해야 되는 수정사항이 남아있음
