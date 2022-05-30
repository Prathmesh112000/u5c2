import { useRef } from "react";
export const Pagination = ({ total, selected, onPageChange }) => {
    const inpref=useRef([])

  return <div className="pageContainer" style={{display:"flex"}}>


  {new Array(total+1).fill(0).map((elem,i)=>(
  <div key={i} style={{width:"100px",height:"50px",border:"solid black 1px"}}  ref={(element)=>{
    inpref.current[i]=element
  }}>{i==0?"<":i==total+1?">":i}</div>
))}

<div style={{width:"100px",height:"50px",border:"solid black 1px"}}>
  {">"}
</div>


  </div>;
};



{/* <div style={{display:"flex"}}>
<div>
  <h1>{"<"}</h1>
</div>
{new Array(total).fill(-1).map((elem,i)=>{
return (<div style={{width:"30px",height:"80px",border:"1px solid black"}}>
<h1>{i+1}</h1>
</div>)
})}

<div>
<h1>{">"}</h1>
</div>
</div> */}