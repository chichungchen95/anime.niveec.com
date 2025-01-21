@media (max-width: 1200px) {
  .computer {
    display:none;
    visibility: hidden ;
  }
  div {
    flex-direction: column;
    justify-content: center;
  }
}
@media (min-width: 1200px) {
  .phone {
    display:none;
    visibility: hidden ;
  }
}
@media (max-width: 6000px) {


  #vanta-bg {
    position: fixed;
    width: 125%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    
  }
  #gray {
    background-color: rgba(0, 0, 0, .5);
  }
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #23153c;
    color: #333;
  }
  /* body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #000000;
    color: #333;
    background: url("https://github.com/chichungchen95/-/blob/main/rashidckk_An_anime_couple_sitting_under_a_tree_watching_the_s_956c3e7d-2ef8-4cf8-bb5d-99467b6b6bbb_1.jpg?raw=true") ;
    background-size: contain;background-size: cover;
    
  } */
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  
  h1 {
    font-size: 1.5rem;
    margin: 20px 0;
    text-align: center;
    text-shadow: 0 0 5px white, 0 0 10px white, 0 0 15px white;
  }
  
    ul{
      margin:0;
      padding:0;
    }
    
  .search-container {
    margin: 15px auto;
    width: 90%;
    max-width: 400px;
    
  }

  .search-container input[type="text"] {
    background-color: rgba(255, 255, 255, 0.4);
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    transition: background-color 0.3s ease, border-color 0.3s ease; 
    
  }
  
  .search-container input[type="text"]:hover {
    background-color: rgba(255, 255, 255, 0.6);
    border-color: #999;
    color: rgba(139, 0, 255, 0.9)
  }
  

  .search-container button {
    width: 100%;
    padding: 15px;
    background-color: rgba(0, 123, 255, 0.8);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .search-container button:hover {
    background-color: rgba(0, 86, 179, 0.8); 
  }
  


  .results li {
    list-style: none;
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid #ddd;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    transition: border-color 0.5s ease; 
    color: rgba(255, 255, 255, 0.9)
    
  }
  
  .results li:hover {
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
    border-color: white; 
    border: 3px solid transparent;
    animation: lilmymove 5s infinite;
    
  }
  @keyframes lilmymove {
    0%   { 
      border-color: red; 
    }
    25%  { 
      border-color: blue;
    }
    50%  { 
      border-color: yellow; 
    }
    75%  { 

      border-color: green; 
    }
    100% { 

      border-color: red; 
    }
  }
  .list-A {
    margin: 0 auto;             /* 使元素水平居中 */
    padding: 10px;              /* 给列表添加内边距 */
    max-width: none;           /* 设置列表的最大宽度 */
    width: 100%;                /* 设置宽度为100%，以适应容器 */
    list-style-type: none;      /* 去掉默认的列表样式 */
    background-color: #f9f9f900; /* 设置背景色 */
    border-radius: 8px;         /* 设置圆角 */
    border: 1px solid #ddd;    /* 设置边框 */
    flex: 1;
  }
/* 确保长标题能够换行并且不超出容器宽度 */


/* 确保长标题能够换行并且不超出容器宽度 */
  .list-A li {
    margin-bottom: 10px;
    word-wrap: break-word;  /* 自动换行 */
    word-break: break-word;  /* 强制单词在容器边界换行 */
  }
  
  .list-A li h2 {
    font-size: 14px;
    max-width: 100%;  /* 限制宽度 */
    white-space: normal;  /* 允许换行 */
    overflow-wrap: break-word;  /* 长单词会换行 */
    margin-bottom: 10px;  /* 添加下间距 */
    text-overflow: ellipsis;  /* 如果标题太长显示省略号 */
    display: block;  /* 让标题在块级元素中显示 */
  }
  .results a {
    color: #007bff;
    text-decoration: none;
  }

  .results a:hover {
    text-decoration: underline;
  }

  .back-to-top {
    text-align: center;
    margin: 20px 0;
  }

  .back-to-top a {
    color: #007bff;
    text-decoration: none;
    padding: 10px 20px;
    border: 1px solid #007bff;
    border-radius: 5px;
  }

  .back-to-top a:hover {
    background-color: #007bff;
    color: white;
  }

  .footer {
    text-align: center;
    margin-top: 20px;
    padding: 10px 0;
    background-color: #f1f1f1;
    font-size: 0.8rem;
    color: #666;
  }
  .results li button {
    width: 20%;
    padding: 10px;
    background-color: rgba(0, 123, 255, 0.8);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

  }
  
  .results li button:hover {
    background-color: rgba(0, 86, 179, 0.8);
  }
}
