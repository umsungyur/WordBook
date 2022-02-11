/* esLint-disable */
import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';
  let classNm1="black-nav";
  var [a,b] =[10,1000];//destructuring문법  / array,object에 있던 자료를 변수에 쉽게 담고싶을때
  let [글제목,글제목변경] = useState(['남자 코드 추천','강남 우동 맛집','파이썬 독학']);//[a,b] [state데이터,state데이터변경함수]
  let [따봉,따봉변경]=useState(0);
  //function 변경하기(){
   // 글제목변경(['여자 코드 추천',글제목[1],글제목[2]]);
   // var newArray =[...글제목]
   // newArray[0] = '여자코드 추천'
   // 글제목변경(newArray)
  //}
  function  함수(){
    return  posts;
  }

  return (//jax
    /*
    <div className="App">
     <div className={classNm1}>
      <div style={{color:'blue',fontSize:'30px' }}>개발 Blog</div>
     </div>
     <img src={logo}></img>
     <h4>{posts}</h4>
    </div>
    */
    <div className="App">
      <div className={classNm1}>
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={변경하기}>버튼</button> --> */}
      <div className='list'>
       <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉} </h4>
       <p>2월 17일 발행</p>
       <hr/>
      </div>
      <div className='list'>
       <h4>{글제목[1]}</h4>
       <p>2월 18일 발행</p>
       <hr/>
      </div>
      <div className='list'>
       <h4>{글제목[2]}</h4>
       <p>2월 19일 발행</p>
       <hr/>
      </div>  
      <Modal></Modal>
   </div>
  );
}
function Modal(){
  return(
    <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
