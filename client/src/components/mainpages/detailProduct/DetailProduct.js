import React, {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'

function DetailProduct() {
    const params = useParams()
    const state =useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){
            products.forEach(product =>{
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;

   // console.log(detailProduct
    return(
        <>
        <div className="detail">
            <img src={detailProduct.images.url} alt="" />
            <div className="box-detail">
                <div className="row">
                    <h2>{detailProduct.title}</h2>
                    <h6>#id: {detailProduct.product_id}</h6>
                </div>
                <p>{detailProduct.description}</p>
                <p>{detailProduct.content}</p>
                          
                
             </div>
</div>



<div className="nav">
<input type="checkbox" id="menu" />
<label className="title" for="menu">🔻<b>MULTIPLE CHOICE QUESTIONS</b></label>

     <div className="multi-level"><div className="item"><input type="checkbox" id="A" /><label className="lesson" for="A">{detailProduct.c1}</label>
<ul><li><div className="sub-item"><input type="checkbox" id="A-A" /><label className="topics" for="A-A">🔻{detailProduct.t1}</label>
<ul>
<li className="ques1">{detailProduct.mcq1}</li> <li className="o">{detailProduct.o1}</li> <li className="o">{detailProduct.o2}</li> <li className="o">{detailProduct.o3}</li> <li className="o">{detailProduct.o4}</li> <li className="o">{detailProduct.o5}</li>
<li className="ques1">{detailProduct.mcq2}</li> <li className="o">{detailProduct.o6}</li> <li className="o">{detailProduct.o7}</li> <li className="o">{detailProduct.o8}</li> <li className="o">{detailProduct.o9}</li> <li className="o">{detailProduct.o10}</li>
<li className="ques1">{detailProduct.mcq3}</li> <li className="o">{detailProduct.o11}</li> <li className="o">{detailProduct.o12}</li> <li className="o">{detailProduct.o13}</li> <li className="o">{detailProduct.o14}</li> <li className="o">{detailProduct.o15}</li>
<li className="ques1">{detailProduct.mcq4}</li> <li className="o">{detailProduct.o16}</li> <li className="o">{detailProduct.o17}</li> <li className="o">{detailProduct.o18}</li> <li className="o">{detailProduct.o19}</li> <li className="o">{detailProduct.o20}</li>
<li className="ques1">{detailProduct.mcq5}</li> <li className="o">{detailProduct.o21}</li> <li className="o">{detailProduct.o22}</li> <li className="o">{detailProduct.o23}</li> <li className="o">{detailProduct.o24}</li> <li className="o">{detailProduct.o25}</li>
<li className="ques1">{detailProduct.mcq6}</li> <li className="o">{detailProduct.o26}</li> <li className="o">{detailProduct.o27}</li> <li className="o">{detailProduct.o28}</li> <li className="o">{detailProduct.o29}</li> <li className="o">{detailProduct.o30}</li>
<li className="ques1">{detailProduct.mcq7}</li> <li className="o">{detailProduct.o31}</li> <li className="o">{detailProduct.o32}</li> <li className="o">{detailProduct.o33}</li> <li className="o">{detailProduct.o34}</li> <li className="o">{detailProduct.o35}</li>
<li className="ques1">{detailProduct.mcq8}</li> <li className="o">{detailProduct.o36}</li> <li className="o">{detailProduct.o37}</li> <li className="o">{detailProduct.o38}</li> <li className="o">{detailProduct.o39}</li> <li className="o">{detailProduct.o40}</li>
<li className="ques1">{detailProduct.mcq9}</li> <li className="o">{detailProduct.o41}</li> <li className="o">{detailProduct.o42}</li> <li className="o">{detailProduct.o43}</li> <li className="o">{detailProduct.o44}</li> <li className="o">{detailProduct.o45}</li>
<li className="ques1">{detailProduct.mcq10}</li> <li className="o">{detailProduct.o46}</li> <li className="o">{detailProduct.o47}</li> <li className="o">{detailProduct.o48}</li> <li className="o">{detailProduct.o49}</li> <li className="o">{detailProduct.o50}</li>

  </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="A-B" /><label className="topics" for="A-B">🔻{detailProduct.t2}</label>
<ul>
<li className="ques1">{detailProduct.mcq11}</li> <li className="o">{detailProduct.o51}</li> <li className="o">{detailProduct.o52}</li> <li className="o">{detailProduct.o53}</li> <li className="o">{detailProduct.o54}</li> <li className="o">{detailProduct.o55}</li>
<li className="ques1">{detailProduct.mcq12}</li> <li className="o">{detailProduct.o56}</li> <li className="o">{detailProduct.o57}</li> <li className="o">{detailProduct.o58}</li> <li className="o">{detailProduct.o59}</li> <li className="o">{detailProduct.o60}</li>
<li className="ques1">{detailProduct.mcq13}</li> <li className="o">{detailProduct.o61}</li> <li className="o">{detailProduct.o62}</li> <li className="o">{detailProduct.o63}</li> <li className="o">{detailProduct.o64}</li> <li className="o">{detailProduct.o65}</li>
<li className="ques1">{detailProduct.mcq14}</li> <li className="o">{detailProduct.o66}</li> <li className="o">{detailProduct.o67}</li> <li className="o">{detailProduct.o68}</li> <li className="o">{detailProduct.o69}</li> <li className="o">{detailProduct.o70}</li>
<li className="ques1">{detailProduct.mcq15}</li> <li className="o">{detailProduct.o71}</li> <li className="o">{detailProduct.o72}</li> <li className="o">{detailProduct.o73}</li> <li className="o">{detailProduct.o74}</li> <li className="o">{detailProduct.o75}</li>
<li className="ques1">{detailProduct.mcq16}</li> <li className="o">{detailProduct.o76}</li> <li className="o">{detailProduct.o77}</li> <li className="o">{detailProduct.o78}</li> <li className="o">{detailProduct.o79}</li> <li className="o">{detailProduct.o80}</li>
<li className="ques1">{detailProduct.mcq17}</li> <li className="o">{detailProduct.o81}</li> <li className="o">{detailProduct.o82}</li> <li className="o">{detailProduct.o83}</li> <li className="o">{detailProduct.o84}</li> <li className="o">{detailProduct.o85}</li>
<li className="ques1">{detailProduct.mcq18}</li> <li className="o">{detailProduct.o86}</li> <li className="o">{detailProduct.o87}</li> <li className="o">{detailProduct.o88}</li> <li className="o">{detailProduct.o89}</li> <li className="o">{detailProduct.o90}</li>
<li className="ques1">{detailProduct.mcq19}</li> <li className="o">{detailProduct.o91}</li> <li className="o">{detailProduct.o92}</li> <li className="o">{detailProduct.o93}</li> <li className="o">{detailProduct.o94}</li> <li className="o">{detailProduct.o95}</li>
<li className="ques1">{detailProduct.mcq20}</li> <li className="o">{detailProduct.o96}</li> <li className="o">{detailProduct.o97}</li> <li className="o">{detailProduct.o98}</li> <li className="o">{detailProduct.o99}</li> <li className="o">{detailProduct.o100}</li>

   </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="A-C" /><label className="topics" for="A-C">🔻{detailProduct.t3}</label>
<ul>
<li className="ques1">{detailProduct.mcq21}</li> <li className="o">{detailProduct.o101}</li> <li className="o">{detailProduct.o102}</li> <li className="o">{detailProduct.o103}</li> <li className="o">{detailProduct.o104}</li> <li className="o">{detailProduct.o105}</li>
<li className="ques1">{detailProduct.mcq22}</li> <li className="o">{detailProduct.o106}</li> <li className="o">{detailProduct.o107}</li> <li className="o">{detailProduct.o108}</li> <li className="o">{detailProduct.o109}</li> <li className="o">{detailProduct.o110}</li>
<li className="ques1">{detailProduct.mcq23}</li> <li className="o">{detailProduct.o111}</li> <li className="o">{detailProduct.o112}</li> <li className="o">{detailProduct.o113}</li> <li className="o">{detailProduct.o114}</li> <li className="o">{detailProduct.o115}</li>
<li className="ques1">{detailProduct.mcq24}</li> <li className="o">{detailProduct.o116}</li> <li className="o">{detailProduct.o117}</li> <li className="o">{detailProduct.o118}</li> <li className="o">{detailProduct.o119}</li> <li className="o">{detailProduct.o120}</li>
<li className="ques1">{detailProduct.mcq25}</li> <li className="o">{detailProduct.o121}</li> <li className="o">{detailProduct.o122}</li> <li className="o">{detailProduct.o123}</li> <li className="o">{detailProduct.o124}</li> <li className="o">{detailProduct.o125}</li>
<li className="ques1">{detailProduct.mcq26}</li> <li className="o">{detailProduct.o126}</li> <li className="o">{detailProduct.o127}</li> <li className="o">{detailProduct.o128}</li> <li className="o">{detailProduct.o129}</li> <li className="o">{detailProduct.o130}</li>
<li className="ques1">{detailProduct.mcq27}</li> <li className="o">{detailProduct.o131}</li> <li className="o">{detailProduct.o132}</li> <li className="o">{detailProduct.o133}</li> <li className="o">{detailProduct.o134}</li> <li className="o">{detailProduct.o135}</li>
<li className="ques1">{detailProduct.mcq28}</li> <li className="o">{detailProduct.o136}</li> <li className="o">{detailProduct.o137}</li> <li className="o">{detailProduct.o138}</li> <li className="o">{detailProduct.o139}</li> <li className="o">{detailProduct.o140}</li>
<li className="ques1">{detailProduct.mcq29}</li> <li className="o">{detailProduct.o141}</li> <li className="o">{detailProduct.o142}</li> <li className="o">{detailProduct.o143}</li> <li className="o">{detailProduct.o144}</li> <li className="o">{detailProduct.o145}</li>
<li className="ques1">{detailProduct.mcq30}</li> <li className="o">{detailProduct.o146}</li> <li className="o">{detailProduct.o147}</li> <li className="o">{detailProduct.o148}</li> <li className="o">{detailProduct.o149}</li> <li className="o">{detailProduct.o150}</li>

   </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="A-D" /><label className="topics" for="A-D">🔻{detailProduct.t4}</label>
<ul>
<li className="ques1">{detailProduct.mcq31}</li> <li className="o">{detailProduct.o151}</li> <li className="o">{detailProduct.o152}</li> <li className="o">{detailProduct.o153}</li> <li className="o">{detailProduct.o154}</li> <li className="o">{detailProduct.o155}</li>
<li className="ques1">{detailProduct.mcq32}</li> <li className="o">{detailProduct.o156}</li> <li className="o">{detailProduct.o157}</li> <li className="o">{detailProduct.o158}</li> <li className="o">{detailProduct.o159}</li> <li className="o">{detailProduct.o160}</li>
<li className="ques1">{detailProduct.mcq33}</li> <li className="o">{detailProduct.o161}</li> <li className="o">{detailProduct.o162}</li> <li className="o">{detailProduct.o163}</li> <li className="o">{detailProduct.o164}</li> <li className="o">{detailProduct.o165}</li>
<li className="ques1">{detailProduct.mcq34}</li> <li className="o">{detailProduct.o166}</li> <li className="o">{detailProduct.o167}</li> <li className="o">{detailProduct.o168}</li> <li className="o">{detailProduct.o169}</li> <li className="o">{detailProduct.o170}</li>
<li className="ques1">{detailProduct.mcq35}</li> <li className="o">{detailProduct.o171}</li> <li className="o">{detailProduct.o172}</li> <li className="o">{detailProduct.o173}</li> <li className="o">{detailProduct.o174}</li> <li className="o">{detailProduct.o175}</li>
<li className="ques1">{detailProduct.mcq36}</li> <li className="o">{detailProduct.o176}</li> <li className="o">{detailProduct.o177}</li> <li className="o">{detailProduct.o178}</li> <li className="o">{detailProduct.o179}</li> <li className="o">{detailProduct.o180}</li>
<li className="ques1">{detailProduct.mcq37}</li> <li className="o">{detailProduct.o181}</li> <li className="o">{detailProduct.o182}</li> <li className="o">{detailProduct.o183}</li> <li className="o">{detailProduct.o184}</li> <li className="o">{detailProduct.o185}</li>
<li className="ques1">{detailProduct.mcq38}</li> <li className="o">{detailProduct.o186}</li> <li className="o">{detailProduct.o187}</li> <li className="o">{detailProduct.o188}</li> <li className="o">{detailProduct.o189}</li> <li className="o">{detailProduct.o190}</li>
<li className="ques1">{detailProduct.mcq39}</li> <li className="o">{detailProduct.o191}</li> <li className="o">{detailProduct.o192}</li> <li className="o">{detailProduct.o193}</li> <li className="o">{detailProduct.o194}</li> <li className="o">{detailProduct.o195}</li>
<li className="ques1">{detailProduct.mcq40}</li> <li className="o">{detailProduct.o196}</li> <li className="o">{detailProduct.o197}</li> <li className="o">{detailProduct.o198}</li> <li className="o">{detailProduct.o199}</li> <li className="o">{detailProduct.o200}</li>

     </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="A-E" /><label className="topics" for="A-E">🔻{detailProduct.t5}</label>
<ul>
<li className="ques1">{detailProduct.mcq41}</li> <li className="o">{detailProduct.o201}</li> <li className="o">{detailProduct.o202}</li> <li className="o">{detailProduct.o203}</li> <li className="o">{detailProduct.o204}</li> <li className="o">{detailProduct.o205}</li>
<li className="ques1">{detailProduct.mcq42}</li> <li className="o">{detailProduct.o206}</li> <li className="o">{detailProduct.o207}</li> <li className="o">{detailProduct.o208}</li> <li className="o">{detailProduct.o209}</li> <li className="o">{detailProduct.o210}</li>
<li className="ques1">{detailProduct.mcq43}</li> <li className="o">{detailProduct.o211}</li> <li className="o">{detailProduct.o212}</li> <li className="o">{detailProduct.o213}</li> <li className="o">{detailProduct.o214}</li> <li className="o">{detailProduct.o215}</li>
<li className="ques1">{detailProduct.mcq44}</li> <li className="o">{detailProduct.o216}</li> <li className="o">{detailProduct.o217}</li> <li className="o">{detailProduct.o218}</li> <li className="o">{detailProduct.o219}</li> <li className="o">{detailProduct.o220}</li>
<li className="ques1">{detailProduct.mcq45}</li> <li className="o">{detailProduct.o221}</li> <li className="o">{detailProduct.o222}</li> <li className="o">{detailProduct.o223}</li> <li className="o">{detailProduct.o224}</li> <li className="o">{detailProduct.o225}</li>
<li className="ques1">{detailProduct.mcq46}</li> <li className="o">{detailProduct.o226}</li> <li className="o">{detailProduct.o227}</li> <li className="o">{detailProduct.o228}</li> <li className="o">{detailProduct.o229}</li> <li className="o">{detailProduct.o230}</li>
<li className="ques1">{detailProduct.mcq47}</li> <li className="o">{detailProduct.o231}</li> <li className="o">{detailProduct.o232}</li> <li className="o">{detailProduct.o233}</li> <li className="o">{detailProduct.o234}</li> <li className="o">{detailProduct.o235}</li>
<li className="ques1">{detailProduct.mcq48}</li> <li className="o">{detailProduct.o236}</li> <li className="o">{detailProduct.o237}</li> <li className="o">{detailProduct.o238}</li> <li className="o">{detailProduct.o239}</li> <li className="o">{detailProduct.o240}</li>
<li className="ques1">{detailProduct.mcq49}</li> <li className="o">{detailProduct.o241}</li> <li className="o">{detailProduct.o242}</li> <li className="o">{detailProduct.o243}</li> <li className="o">{detailProduct.o244}</li> <li className="o">{detailProduct.o245}</li>
<li className="ques1">{detailProduct.mcq50}</li> <li className="o">{detailProduct.o246}</li> <li className="o">{detailProduct.o247}</li> <li className="o">{detailProduct.o248}</li> <li className="o">{detailProduct.o249}</li> <li className="o">{detailProduct.o250}</li>

     </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="A-F" /><label className="topics" for="A-F">🔻{detailProduct.t6}</label>
<ul>
<li className="ques1">{detailProduct.mcq51}</li> <li className="o">{detailProduct.o251}</li> <li className="o">{detailProduct.o252}</li> <li className="o">{detailProduct.o253}</li> <li className="o">{detailProduct.o254}</li> <li className="o">{detailProduct.o255}</li>
<li className="ques1">{detailProduct.mcq52}</li> <li className="o">{detailProduct.o256}</li> <li className="o">{detailProduct.o257}</li> <li className="o">{detailProduct.o258}</li> <li className="o">{detailProduct.o259}</li> <li className="o">{detailProduct.o260}</li>
<li className="ques1">{detailProduct.mcq53}</li> <li className="o">{detailProduct.o261}</li> <li className="o">{detailProduct.o262}</li> <li className="o">{detailProduct.o263}</li> <li className="o">{detailProduct.o264}</li> <li className="o">{detailProduct.o265}</li>
<li className="ques1">{detailProduct.mcq54}</li> <li className="o">{detailProduct.o266}</li> <li className="o">{detailProduct.o267}</li> <li className="o">{detailProduct.o268}</li> <li className="o">{detailProduct.o269}</li> <li className="o">{detailProduct.o270}</li>
<li className="ques1">{detailProduct.mcq55}</li> <li className="o">{detailProduct.o271}</li> <li className="o">{detailProduct.o272}</li> <li className="o">{detailProduct.o273}</li> <li className="o">{detailProduct.o274}</li> <li className="o">{detailProduct.o275}</li>
<li className="ques1">{detailProduct.mcq56}</li> <li className="o">{detailProduct.o276}</li> <li className="o">{detailProduct.o277}</li> <li className="o">{detailProduct.o278}</li> <li className="o">{detailProduct.o279}</li> <li className="o">{detailProduct.o280}</li>
<li className="ques1">{detailProduct.mcq57}</li> <li className="o">{detailProduct.o281}</li> <li className="o">{detailProduct.o282}</li> <li className="o">{detailProduct.o283}</li> <li className="o">{detailProduct.o284}</li> <li className="o">{detailProduct.o285}</li>
<li className="ques1">{detailProduct.mcq58}</li> <li className="o">{detailProduct.o286}</li> <li className="o">{detailProduct.o287}</li> <li className="o">{detailProduct.o288}</li> <li className="o">{detailProduct.o289}</li> <li className="o">{detailProduct.o290}</li>
<li className="ques1">{detailProduct.mcq59}</li> <li className="o">{detailProduct.o291}</li> <li className="o">{detailProduct.o292}</li> <li className="o">{detailProduct.o293}</li> <li className="o">{detailProduct.o294}</li> <li className="o">{detailProduct.o295}</li>
<li className="ques1">{detailProduct.mcq60}</li> <li className="o">{detailProduct.o296}</li> <li className="o">{detailProduct.o297}</li> <li className="o">{detailProduct.o298}</li> <li className="o">{detailProduct.o299}</li> <li className="o">{detailProduct.o300}</li>

     </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="A-G" /><label className="topics" for="A-G">🔻{detailProduct.t7}</label>
<ul>
<li className="ques1">{detailProduct.mcq61}</li> <li className="o">{detailProduct.o301}</li> <li className="o">{detailProduct.o302}</li> <li className="o">{detailProduct.o303}</li> <li className="o">{detailProduct.o304}</li> <li className="o">{detailProduct.o305}</li>
<li className="ques1">{detailProduct.mcq62}</li> <li className="o">{detailProduct.o306}</li> <li className="o">{detailProduct.o307}</li> <li className="o">{detailProduct.o308}</li> <li className="o">{detailProduct.o309}</li> <li className="o">{detailProduct.o310}</li>
<li className="ques1">{detailProduct.mcq63}</li> <li className="o">{detailProduct.o311}</li> <li className="o">{detailProduct.o312}</li> <li className="o">{detailProduct.o313}</li> <li className="o">{detailProduct.o314}</li> <li className="o">{detailProduct.o315}</li>
<li className="ques1">{detailProduct.mcq64}</li> <li className="o">{detailProduct.o316}</li> <li className="o">{detailProduct.o317}</li> <li className="o">{detailProduct.o318}</li> <li className="o">{detailProduct.o319}</li> <li className="o">{detailProduct.o320}</li>
<li className="ques1">{detailProduct.mcq65}</li> <li className="o">{detailProduct.o321}</li> <li className="o">{detailProduct.o322}</li> <li className="o">{detailProduct.o323}</li> <li className="o">{detailProduct.o324}</li> <li className="o">{detailProduct.o325}</li>
<li className="ques1">{detailProduct.mcq66}</li> <li className="o">{detailProduct.o326}</li> <li className="o">{detailProduct.o327}</li> <li className="o">{detailProduct.o328}</li> <li className="o">{detailProduct.o329}</li> <li className="o">{detailProduct.o330}</li>
<li className="ques1">{detailProduct.mcq67}</li> <li className="o">{detailProduct.o331}</li> <li className="o">{detailProduct.o332}</li> <li className="o">{detailProduct.o333}</li> <li className="o">{detailProduct.o334}</li> <li className="o">{detailProduct.o335}</li>
<li className="ques1">{detailProduct.mcq68}</li> <li className="o">{detailProduct.o336}</li> <li className="o">{detailProduct.o337}</li> <li className="o">{detailProduct.o338}</li> <li className="o">{detailProduct.o339}</li> <li className="o">{detailProduct.o340}</li>
<li className="ques1">{detailProduct.mcq69}</li> <li className="o">{detailProduct.o341}</li> <li className="o">{detailProduct.o342}</li> <li className="o">{detailProduct.o343}</li> <li className="o">{detailProduct.o344}</li> <li className="o">{detailProduct.o345}</li>
<li className="ques1">{detailProduct.mcq70}</li> <li className="o">{detailProduct.o346}</li> <li className="o">{detailProduct.o347}</li> <li className="o">{detailProduct.o348}</li> <li className="o">{detailProduct.o349}</li> <li className="o">{detailProduct.o350}</li>

     </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="A-H" /><label className="topics" for="A-H">🔻{detailProduct.t8}</label>
<ul>
<li className="ques1">{detailProduct.mcq71}</li> <li className="o">{detailProduct.o351}</li> <li className="o">{detailProduct.o352}</li> <li className="o">{detailProduct.o353}</li> <li className="o">{detailProduct.o354}</li> <li className="o">{detailProduct.o355}</li>
<li className="ques1">{detailProduct.mcq72}</li> <li className="o">{detailProduct.o356}</li> <li className="o">{detailProduct.o357}</li> <li className="o">{detailProduct.o358}</li> <li className="o">{detailProduct.o359}</li> <li className="o">{detailProduct.o360}</li>
<li className="ques1">{detailProduct.mcq73}</li> <li className="o">{detailProduct.o361}</li> <li className="o">{detailProduct.o362}</li> <li className="o">{detailProduct.o363}</li> <li className="o">{detailProduct.o364}</li> <li className="o">{detailProduct.o365}</li>
<li className="ques1">{detailProduct.mcq74}</li> <li className="o">{detailProduct.o366}</li> <li className="o">{detailProduct.o367}</li> <li className="o">{detailProduct.o368}</li> <li className="o">{detailProduct.o369}</li> <li className="o">{detailProduct.o370}</li>
<li className="ques1">{detailProduct.mcq75}</li> <li className="o">{detailProduct.o371}</li> <li className="o">{detailProduct.o372}</li> <li className="o">{detailProduct.o373}</li> <li className="o">{detailProduct.o374}</li> <li className="o">{detailProduct.o375}</li>
<li className="ques1">{detailProduct.mcq76}</li> <li className="o">{detailProduct.o376}</li> <li className="o">{detailProduct.o377}</li> <li className="o">{detailProduct.o378}</li> <li className="o">{detailProduct.o379}</li> <li className="o">{detailProduct.o380}</li>
<li className="ques1">{detailProduct.mcq77}</li> <li className="o">{detailProduct.o381}</li> <li className="o">{detailProduct.o382}</li> <li className="o">{detailProduct.o383}</li> <li className="o">{detailProduct.o384}</li> <li className="o">{detailProduct.o385}</li>
<li className="ques1">{detailProduct.mcq78}</li> <li className="o">{detailProduct.o386}</li> <li className="o">{detailProduct.o387}</li> <li className="o">{detailProduct.o388}</li> <li className="o">{detailProduct.o389}</li> <li className="o">{detailProduct.o390}</li>
<li className="ques1">{detailProduct.mcq79}</li> <li className="o">{detailProduct.o391}</li> <li className="o">{detailProduct.o392}</li> <li className="o">{detailProduct.o393}</li> <li className="o">{detailProduct.o394}</li> <li className="o">{detailProduct.o395}</li>
<li className="ques1">{detailProduct.mcq80}</li> <li className="o">{detailProduct.o396}</li> <li className="o">{detailProduct.o397}</li> <li className="o">{detailProduct.o398}</li> <li className="o">{detailProduct.o399}</li> <li className="o">{detailProduct.o400}</li>

     </ul></div></li></ul>

     </div></div>

     <div className="multi-level"><div className="item"><input type="checkbox" id="B" /><label className="lesson" for="B">{detailProduct.c2}</label>
<ul><li><div className="sub-item"><input type="checkbox" id="B-A" /><label className="topics" for="B-A">🔻{detailProduct.t9}</label>
<ul>
<li className="ques1">{detailProduct.mcq81}</li> <li className="o">{detailProduct.o401}</li> <li className="o">{detailProduct.o402}</li> <li className="o">{detailProduct.o403}</li> <li className="o">{detailProduct.o404}</li> <li className="o">{detailProduct.o405}</li>
<li className="ques1">{detailProduct.mcq82}</li> <li className="o">{detailProduct.o406}</li> <li className="o">{detailProduct.o407}</li> <li className="o">{detailProduct.o408}</li> <li className="o">{detailProduct.o409}</li> <li className="o">{detailProduct.o410}</li>
<li className="ques1">{detailProduct.mcq83}</li> <li className="o">{detailProduct.o411}</li> <li className="o">{detailProduct.o412}</li> <li className="o">{detailProduct.o413}</li> <li className="o">{detailProduct.o414}</li> <li className="o">{detailProduct.o415}</li>
<li className="ques1">{detailProduct.mcq84}</li> <li className="o">{detailProduct.o416}</li> <li className="o">{detailProduct.o417}</li> <li className="o">{detailProduct.o418}</li> <li className="o">{detailProduct.o419}</li> <li className="o">{detailProduct.o420}</li>
<li className="ques1">{detailProduct.mcq85}</li> <li className="o">{detailProduct.o421}</li> <li className="o">{detailProduct.o422}</li> <li className="o">{detailProduct.o423}</li> <li className="o">{detailProduct.o424}</li> <li className="o">{detailProduct.o425}</li>
<li className="ques1">{detailProduct.mcq86}</li> <li className="o">{detailProduct.o426}</li> <li className="o">{detailProduct.o427}</li> <li className="o">{detailProduct.o428}</li> <li className="o">{detailProduct.o429}</li> <li className="o">{detailProduct.o430}</li>
<li className="ques1">{detailProduct.mcq87}</li> <li className="o">{detailProduct.o431}</li> <li className="o">{detailProduct.o432}</li> <li className="o">{detailProduct.o433}</li> <li className="o">{detailProduct.o434}</li> <li className="o">{detailProduct.o435}</li>
<li className="ques1">{detailProduct.mcq88}</li> <li className="o">{detailProduct.o436}</li> <li className="o">{detailProduct.o437}</li> <li className="o">{detailProduct.o438}</li> <li className="o">{detailProduct.o439}</li> <li className="o">{detailProduct.o440}</li>
<li className="ques1">{detailProduct.mcq89}</li> <li className="o">{detailProduct.o441}</li> <li className="o">{detailProduct.o442}</li> <li className="o">{detailProduct.o443}</li> <li className="o">{detailProduct.o444}</li> <li className="o">{detailProduct.o445}</li>
<li className="ques1">{detailProduct.mcq90}</li> <li className="o">{detailProduct.o446}</li> <li className="o">{detailProduct.o447}</li> <li className="o">{detailProduct.o448}</li> <li className="o">{detailProduct.o449}</li> <li className="o">{detailProduct.o450}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="B-B" /><label className="topics" for="B-B">🔻{detailProduct.t10}</label>
<ul>
<li className="ques1">{detailProduct.mcq91}</li> <li className="o">{detailProduct.o451}</li> <li className="o">{detailProduct.o452}</li> <li className="o">{detailProduct.o453}</li> <li className="o">{detailProduct.o454}</li> <li className="o">{detailProduct.o455}</li>
<li className="ques1">{detailProduct.mcq92}</li> <li className="o">{detailProduct.o456}</li> <li className="o">{detailProduct.o457}</li> <li className="o">{detailProduct.o458}</li> <li className="o">{detailProduct.o459}</li> <li className="o">{detailProduct.o460}</li>
<li className="ques1">{detailProduct.mcq93}</li> <li className="o">{detailProduct.o461}</li> <li className="o">{detailProduct.o462}</li> <li className="o">{detailProduct.o463}</li> <li className="o">{detailProduct.o464}</li> <li className="o">{detailProduct.o465}</li>
<li className="ques1">{detailProduct.mcq94}</li> <li className="o">{detailProduct.o466}</li> <li className="o">{detailProduct.o467}</li> <li className="o">{detailProduct.o468}</li> <li className="o">{detailProduct.o469}</li> <li className="o">{detailProduct.o470}</li>
<li className="ques1">{detailProduct.mcq95}</li> <li className="o">{detailProduct.o471}</li> <li className="o">{detailProduct.o472}</li> <li className="o">{detailProduct.o473}</li> <li className="o">{detailProduct.o474}</li> <li className="o">{detailProduct.o475}</li>
<li className="ques1">{detailProduct.mcq96}</li> <li className="o">{detailProduct.o476}</li> <li className="o">{detailProduct.o477}</li> <li className="o">{detailProduct.o478}</li> <li className="o">{detailProduct.o479}</li> <li className="o">{detailProduct.o480}</li>
<li className="ques1">{detailProduct.mcq97}</li> <li className="o">{detailProduct.o481}</li> <li className="o">{detailProduct.o482}</li> <li className="o">{detailProduct.o483}</li> <li className="o">{detailProduct.o484}</li> <li className="o">{detailProduct.o485}</li>
<li className="ques1">{detailProduct.mcq98}</li> <li className="o">{detailProduct.o486}</li> <li className="o">{detailProduct.o487}</li> <li className="o">{detailProduct.o488}</li> <li className="o">{detailProduct.o489}</li> <li className="o">{detailProduct.o490}</li>
<li className="ques1">{detailProduct.mcq99}</li> <li className="o">{detailProduct.o491}</li> <li className="o">{detailProduct.o492}</li> <li className="o">{detailProduct.o493}</li> <li className="o">{detailProduct.o494}</li> <li className="o">{detailProduct.o495}</li>
<li className="ques1">{detailProduct.mcq100}</li> <li className="o">{detailProduct.o496}</li> <li className="o">{detailProduct.o497}</li> <li className="o">{detailProduct.o498}</li> <li className="o">{detailProduct.o499}</li> <li className="o">{detailProduct.o500}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="B-C" /><label className="topics" for="B-C">🔻{detailProduct.t11}</label>
<ul>
<li className="ques1">{detailProduct.mcq101}</li> <li className="o">{detailProduct.o501}</li> <li className="o">{detailProduct.o502}</li> <li className="o">{detailProduct.o503}</li> <li className="o">{detailProduct.o504}</li> <li className="o">{detailProduct.o505}</li>
<li className="ques1">{detailProduct.mcq102}</li> <li className="o">{detailProduct.o506}</li> <li className="o">{detailProduct.o507}</li> <li className="o">{detailProduct.o508}</li> <li className="o">{detailProduct.o509}</li> <li className="o">{detailProduct.o510}</li>
<li className="ques1">{detailProduct.mcq103}</li> <li className="o">{detailProduct.o511}</li> <li className="o">{detailProduct.o512}</li> <li className="o">{detailProduct.o513}</li> <li className="o">{detailProduct.o514}</li> <li className="o">{detailProduct.o515}</li>
<li className="ques1">{detailProduct.mcq104}</li> <li className="o">{detailProduct.o516}</li> <li className="o">{detailProduct.o517}</li> <li className="o">{detailProduct.o518}</li> <li className="o">{detailProduct.o519}</li> <li className="o">{detailProduct.o520}</li>
<li className="ques1">{detailProduct.mcq105}</li> <li className="o">{detailProduct.o521}</li> <li className="o">{detailProduct.o522}</li> <li className="o">{detailProduct.o523}</li> <li className="o">{detailProduct.o524}</li> <li className="o">{detailProduct.o525}</li>
<li className="ques1">{detailProduct.mcq106}</li> <li className="o">{detailProduct.o526}</li> <li className="o">{detailProduct.o527}</li> <li className="o">{detailProduct.o528}</li> <li className="o">{detailProduct.o529}</li> <li className="o">{detailProduct.o530}</li>
<li className="ques1">{detailProduct.mcq107}</li> <li className="o">{detailProduct.o531}</li> <li className="o">{detailProduct.o532}</li> <li className="o">{detailProduct.o533}</li> <li className="o">{detailProduct.o534}</li> <li className="o">{detailProduct.o535}</li>
<li className="ques1">{detailProduct.mcq108}</li> <li className="o">{detailProduct.o536}</li> <li className="o">{detailProduct.o537}</li> <li className="o">{detailProduct.o538}</li> <li className="o">{detailProduct.o539}</li> <li className="o">{detailProduct.o540}</li>
<li className="ques1">{detailProduct.mcq109}</li> <li className="o">{detailProduct.o541}</li> <li className="o">{detailProduct.o542}</li> <li className="o">{detailProduct.o543}</li> <li className="o">{detailProduct.o544}</li> <li className="o">{detailProduct.o545}</li>
<li className="ques1">{detailProduct.mcq110}</li> <li className="o">{detailProduct.o546}</li> <li className="o">{detailProduct.o547}</li> <li className="o">{detailProduct.o548}</li> <li className="o">{detailProduct.o549}</li> <li className="o">{detailProduct.o550}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="B-D" /><label className="topics" for="B-D">🔻{detailProduct.t12}</label>
<ul>
<li className="ques1">{detailProduct.mcq111}</li> <li className="o">{detailProduct.o551}</li> <li className="o">{detailProduct.o552}</li> <li className="o">{detailProduct.o553}</li> <li className="o">{detailProduct.o554}</li> <li className="o">{detailProduct.o555}</li>
<li className="ques1">{detailProduct.mcq112}</li> <li className="o">{detailProduct.o556}</li> <li className="o">{detailProduct.o557}</li> <li className="o">{detailProduct.o558}</li> <li className="o">{detailProduct.o559}</li> <li className="o">{detailProduct.o560}</li>
<li className="ques1">{detailProduct.mcq113}</li> <li className="o">{detailProduct.o561}</li> <li className="o">{detailProduct.o562}</li> <li className="o">{detailProduct.o563}</li> <li className="o">{detailProduct.o564}</li> <li className="o">{detailProduct.o565}</li>
<li className="ques1">{detailProduct.mcq114}</li> <li className="o">{detailProduct.o566}</li> <li className="o">{detailProduct.o567}</li> <li className="o">{detailProduct.o568}</li> <li className="o">{detailProduct.o569}</li> <li className="o">{detailProduct.o570}</li>
<li className="ques1">{detailProduct.mcq115}</li> <li className="o">{detailProduct.o571}</li> <li className="o">{detailProduct.o572}</li> <li className="o">{detailProduct.o573}</li> <li className="o">{detailProduct.o574}</li> <li className="o">{detailProduct.o575}</li>
<li className="ques1">{detailProduct.mcq116}</li> <li className="o">{detailProduct.o576}</li> <li className="o">{detailProduct.o577}</li> <li className="o">{detailProduct.o578}</li> <li className="o">{detailProduct.o579}</li> <li className="o">{detailProduct.o580}</li>
<li className="ques1">{detailProduct.mcq117}</li> <li className="o">{detailProduct.o581}</li> <li className="o">{detailProduct.o582}</li> <li className="o">{detailProduct.o583}</li> <li className="o">{detailProduct.o584}</li> <li className="o">{detailProduct.o585}</li>
<li className="ques1">{detailProduct.mcq118}</li> <li className="o">{detailProduct.o586}</li> <li className="o">{detailProduct.o587}</li> <li className="o">{detailProduct.o588}</li> <li className="o">{detailProduct.o589}</li> <li className="o">{detailProduct.o590}</li>
<li className="ques1">{detailProduct.mcq119}</li> <li className="o">{detailProduct.o591}</li> <li className="o">{detailProduct.o592}</li> <li className="o">{detailProduct.o593}</li> <li className="o">{detailProduct.o594}</li> <li className="o">{detailProduct.o595}</li>
<li className="ques1">{detailProduct.mcq120}</li> <li className="o">{detailProduct.o596}</li> <li className="o">{detailProduct.o597}</li> <li className="o">{detailProduct.o598}</li> <li className="o">{detailProduct.o599}</li> <li className="o">{detailProduct.o600}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="B-E" /><label className="topics" for="B-E">🔻{detailProduct.t13}</label>
<ul>
<li className="ques1">{detailProduct.mcq121}</li> <li className="o">{detailProduct.o601}</li> <li className="o">{detailProduct.o602}</li> <li className="o">{detailProduct.o603}</li> <li className="o">{detailProduct.o604}</li> <li className="o">{detailProduct.o605}</li>
<li className="ques1">{detailProduct.mcq122}</li> <li className="o">{detailProduct.o606}</li> <li className="o">{detailProduct.o607}</li> <li className="o">{detailProduct.o608}</li> <li className="o">{detailProduct.o609}</li> <li className="o">{detailProduct.o610}</li>
<li className="ques1">{detailProduct.mcq123}</li> <li className="o">{detailProduct.o611}</li> <li className="o">{detailProduct.o612}</li> <li className="o">{detailProduct.o613}</li> <li className="o">{detailProduct.o614}</li> <li className="o">{detailProduct.o615}</li>
<li className="ques1">{detailProduct.mcq124}</li> <li className="o">{detailProduct.o616}</li> <li className="o">{detailProduct.o617}</li> <li className="o">{detailProduct.o618}</li> <li className="o">{detailProduct.o619}</li> <li className="o">{detailProduct.o620}</li>
<li className="ques1">{detailProduct.mcq125}</li> <li className="o">{detailProduct.o621}</li> <li className="o">{detailProduct.o622}</li> <li className="o">{detailProduct.o623}</li> <li className="o">{detailProduct.o624}</li> <li className="o">{detailProduct.o625}</li>
<li className="ques1">{detailProduct.mcq126}</li> <li className="o">{detailProduct.o626}</li> <li className="o">{detailProduct.o627}</li> <li className="o">{detailProduct.o628}</li> <li className="o">{detailProduct.o629}</li> <li className="o">{detailProduct.o630}</li>
<li className="ques1">{detailProduct.mcq127}</li> <li className="o">{detailProduct.o631}</li> <li className="o">{detailProduct.o632}</li> <li className="o">{detailProduct.o633}</li> <li className="o">{detailProduct.o634}</li> <li className="o">{detailProduct.o635}</li>
<li className="ques1">{detailProduct.mcq128}</li> <li className="o">{detailProduct.o636}</li> <li className="o">{detailProduct.o637}</li> <li className="o">{detailProduct.o638}</li> <li className="o">{detailProduct.o639}</li> <li className="o">{detailProduct.o640}</li>
<li className="ques1">{detailProduct.mcq129}</li> <li className="o">{detailProduct.o641}</li> <li className="o">{detailProduct.o642}</li> <li className="o">{detailProduct.o643}</li> <li className="o">{detailProduct.o644}</li> <li className="o">{detailProduct.o645}</li>
<li className="ques1">{detailProduct.mcq130}</li> <li className="o">{detailProduct.o646}</li> <li className="o">{detailProduct.o647}</li> <li className="o">{detailProduct.o648}</li> <li className="o">{detailProduct.o649}</li> <li className="o">{detailProduct.o650}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="B-F" /><label className="topics" for="B-F">🔻{detailProduct.t14}</label>
<ul>
<li className="ques1">{detailProduct.mcq131}</li> <li className="o">{detailProduct.o651}</li> <li className="o">{detailProduct.o652}</li> <li className="o">{detailProduct.o653}</li> <li className="o">{detailProduct.o654}</li> <li className="o">{detailProduct.o655}</li>
<li className="ques1">{detailProduct.mcq132}</li> <li className="o">{detailProduct.o656}</li> <li className="o">{detailProduct.o657}</li> <li className="o">{detailProduct.o658}</li> <li className="o">{detailProduct.o659}</li> <li className="o">{detailProduct.o660}</li>
<li className="ques1">{detailProduct.mcq133}</li> <li className="o">{detailProduct.o661}</li> <li className="o">{detailProduct.o662}</li> <li className="o">{detailProduct.o663}</li> <li className="o">{detailProduct.o664}</li> <li className="o">{detailProduct.o665}</li>
<li className="ques1">{detailProduct.mcq134}</li> <li className="o">{detailProduct.o666}</li> <li className="o">{detailProduct.o667}</li> <li className="o">{detailProduct.o668}</li> <li className="o">{detailProduct.o669}</li> <li className="o">{detailProduct.o670}</li>
<li className="ques1">{detailProduct.mcq135}</li> <li className="o">{detailProduct.o671}</li> <li className="o">{detailProduct.o672}</li> <li className="o">{detailProduct.o673}</li> <li className="o">{detailProduct.o674}</li> <li className="o">{detailProduct.o675}</li>
<li className="ques1">{detailProduct.mcq136}</li> <li className="o">{detailProduct.o676}</li> <li className="o">{detailProduct.o677}</li> <li className="o">{detailProduct.o678}</li> <li className="o">{detailProduct.o679}</li> <li className="o">{detailProduct.o680}</li>
<li className="ques1">{detailProduct.mcq137}</li> <li className="o">{detailProduct.o681}</li> <li className="o">{detailProduct.o682}</li> <li className="o">{detailProduct.o683}</li> <li className="o">{detailProduct.o684}</li> <li className="o">{detailProduct.o685}</li>
<li className="ques1">{detailProduct.mcq138}</li> <li className="o">{detailProduct.o686}</li> <li className="o">{detailProduct.o687}</li> <li className="o">{detailProduct.o688}</li> <li className="o">{detailProduct.o689}</li> <li className="o">{detailProduct.o690}</li>
<li className="ques1">{detailProduct.mcq139}</li> <li className="o">{detailProduct.o691}</li> <li className="o">{detailProduct.o692}</li> <li className="o">{detailProduct.o693}</li> <li className="o">{detailProduct.o694}</li> <li className="o">{detailProduct.o695}</li>
<li className="ques1">{detailProduct.mcq140}</li> <li className="o">{detailProduct.o696}</li> <li className="o">{detailProduct.o697}</li> <li className="o">{detailProduct.o698}</li> <li className="o">{detailProduct.o699}</li> <li className="o">{detailProduct.o700}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="B-G" /><label className="topics" for="B-G">🔻{detailProduct.t15}</label>
<ul>
<li className="ques1">{detailProduct.mcq141}</li> <li className="o">{detailProduct.o701}</li> <li className="o">{detailProduct.o702}</li> <li className="o">{detailProduct.o703}</li> <li className="o">{detailProduct.o704}</li> <li className="o">{detailProduct.o705}</li>
<li className="ques1">{detailProduct.mcq142}</li> <li className="o">{detailProduct.o706}</li> <li className="o">{detailProduct.o707}</li> <li className="o">{detailProduct.o708}</li> <li className="o">{detailProduct.o709}</li> <li className="o">{detailProduct.o710}</li>
<li className="ques1">{detailProduct.mcq143}</li> <li className="o">{detailProduct.o711}</li> <li className="o">{detailProduct.o712}</li> <li className="o">{detailProduct.o713}</li> <li className="o">{detailProduct.o714}</li> <li className="o">{detailProduct.o715}</li>
<li className="ques1">{detailProduct.mcq144}</li> <li className="o">{detailProduct.o716}</li> <li className="o">{detailProduct.o717}</li> <li className="o">{detailProduct.o718}</li> <li className="o">{detailProduct.o719}</li> <li className="o">{detailProduct.o720}</li>
<li className="ques1">{detailProduct.mcq145}</li> <li className="o">{detailProduct.o721}</li> <li className="o">{detailProduct.o722}</li> <li className="o">{detailProduct.o723}</li> <li className="o">{detailProduct.o724}</li> <li className="o">{detailProduct.o725}</li>
<li className="ques1">{detailProduct.mcq146}</li> <li className="o">{detailProduct.o726}</li> <li className="o">{detailProduct.o727}</li> <li className="o">{detailProduct.o728}</li> <li className="o">{detailProduct.o729}</li> <li className="o">{detailProduct.o730}</li>
<li className="ques1">{detailProduct.mcq147}</li> <li className="o">{detailProduct.o731}</li> <li className="o">{detailProduct.o732}</li> <li className="o">{detailProduct.o733}</li> <li className="o">{detailProduct.o734}</li> <li className="o">{detailProduct.o735}</li>
<li className="ques1">{detailProduct.mcq148}</li> <li className="o">{detailProduct.o736}</li> <li className="o">{detailProduct.o737}</li> <li className="o">{detailProduct.o738}</li> <li className="o">{detailProduct.o739}</li> <li className="o">{detailProduct.o740}</li>
<li className="ques1">{detailProduct.mcq149}</li> <li className="o">{detailProduct.o741}</li> <li className="o">{detailProduct.o742}</li> <li className="o">{detailProduct.o743}</li> <li className="o">{detailProduct.o744}</li> <li className="o">{detailProduct.o745}</li>
<li className="ques1">{detailProduct.mcq150}</li> <li className="o">{detailProduct.o746}</li> <li className="o">{detailProduct.o747}</li> <li className="o">{detailProduct.o748}</li> <li className="o">{detailProduct.o749}</li> <li className="o">{detailProduct.o750}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="B-H" /><label className="topics" for="B-H">🔻{detailProduct.t16}</label>
<ul>
<li className="ques1">{detailProduct.mcq151}</li> <li className="o">{detailProduct.o751}</li> <li className="o">{detailProduct.o752}</li> <li className="o">{detailProduct.o753}</li> <li className="o">{detailProduct.o754}</li> <li className="o">{detailProduct.o755}</li>
<li className="ques1">{detailProduct.mcq152}</li> <li className="o">{detailProduct.o756}</li> <li className="o">{detailProduct.o757}</li> <li className="o">{detailProduct.o758}</li> <li className="o">{detailProduct.o759}</li> <li className="o">{detailProduct.o760}</li>
<li className="ques1">{detailProduct.mcq153}</li> <li className="o">{detailProduct.o761}</li> <li className="o">{detailProduct.o762}</li> <li className="o">{detailProduct.o763}</li> <li className="o">{detailProduct.o764}</li> <li className="o">{detailProduct.o765}</li>
<li className="ques1">{detailProduct.mcq154}</li> <li className="o">{detailProduct.o766}</li> <li className="o">{detailProduct.o767}</li> <li className="o">{detailProduct.o768}</li> <li className="o">{detailProduct.o769}</li> <li className="o">{detailProduct.o770}</li>
<li className="ques1">{detailProduct.mcq155}</li> <li className="o">{detailProduct.o771}</li> <li className="o">{detailProduct.o772}</li> <li className="o">{detailProduct.o773}</li> <li className="o">{detailProduct.o774}</li> <li className="o">{detailProduct.o775}</li>
<li className="ques1">{detailProduct.mcq156}</li> <li className="o">{detailProduct.o776}</li> <li className="o">{detailProduct.o777}</li> <li className="o">{detailProduct.o778}</li> <li className="o">{detailProduct.o779}</li> <li className="o">{detailProduct.o780}</li>
<li className="ques1">{detailProduct.mcq157}</li> <li className="o">{detailProduct.o781}</li> <li className="o">{detailProduct.o782}</li> <li className="o">{detailProduct.o783}</li> <li className="o">{detailProduct.o784}</li> <li className="o">{detailProduct.o785}</li>
<li className="ques1">{detailProduct.mcq158}</li> <li className="o">{detailProduct.o786}</li> <li className="o">{detailProduct.o787}</li> <li className="o">{detailProduct.o788}</li> <li className="o">{detailProduct.o789}</li> <li className="o">{detailProduct.o790}</li>
<li className="ques1">{detailProduct.mcq159}</li> <li className="o">{detailProduct.o791}</li> <li className="o">{detailProduct.o792}</li> <li className="o">{detailProduct.o793}</li> <li className="o">{detailProduct.o794}</li> <li className="o">{detailProduct.o795}</li>
<li className="ques1">{detailProduct.mcq160}</li> <li className="o">{detailProduct.o796}</li> <li className="o">{detailProduct.o797}</li> <li className="o">{detailProduct.o798}</li> <li className="o">{detailProduct.o799}</li> <li className="o">{detailProduct.o800}</li>
</ul></div></li></ul>
     
     </div></div>

     <div className="multi-level"><div className="item"><input type="checkbox" id="C" /><label className="lesson" for="C">{detailProduct.c3}</label>
     <ul><li><div className="sub-item"><input type="checkbox" id="C-A" /><label className="topics" for="C-A">🔻{detailProduct.t17}</label>
<ul>
<li className="ques1">{detailProduct.mcq161}</li> <li className="o">{detailProduct.o801}</li> <li className="o">{detailProduct.o802}</li> <li className="o">{detailProduct.o803}</li> <li className="o">{detailProduct.o804}</li> <li className="o">{detailProduct.o805}</li>
<li className="ques1">{detailProduct.mcq162}</li> <li className="o">{detailProduct.o806}</li> <li className="o">{detailProduct.o807}</li> <li className="o">{detailProduct.o808}</li> <li className="o">{detailProduct.o809}</li> <li className="o">{detailProduct.o810}</li>
<li className="ques1">{detailProduct.mcq163}</li> <li className="o">{detailProduct.o811}</li> <li className="o">{detailProduct.o812}</li> <li className="o">{detailProduct.o813}</li> <li className="o">{detailProduct.o814}</li> <li className="o">{detailProduct.o815}</li>
<li className="ques1">{detailProduct.mcq164}</li> <li className="o">{detailProduct.o816}</li> <li className="o">{detailProduct.o817}</li> <li className="o">{detailProduct.o818}</li> <li className="o">{detailProduct.o819}</li> <li className="o">{detailProduct.o820}</li>
<li className="ques1">{detailProduct.mcq165}</li> <li className="o">{detailProduct.o821}</li> <li className="o">{detailProduct.o822}</li> <li className="o">{detailProduct.o823}</li> <li className="o">{detailProduct.o824}</li> <li className="o">{detailProduct.o825}</li>
<li className="ques1">{detailProduct.mcq166}</li> <li className="o">{detailProduct.o826}</li> <li className="o">{detailProduct.o827}</li> <li className="o">{detailProduct.o828}</li> <li className="o">{detailProduct.o829}</li> <li className="o">{detailProduct.o830}</li>
<li className="ques1">{detailProduct.mcq167}</li> <li className="o">{detailProduct.o831}</li> <li className="o">{detailProduct.o832}</li> <li className="o">{detailProduct.o833}</li> <li className="o">{detailProduct.o834}</li> <li className="o">{detailProduct.o835}</li>
<li className="ques1">{detailProduct.mcq168}</li> <li className="o">{detailProduct.o836}</li> <li className="o">{detailProduct.o837}</li> <li className="o">{detailProduct.o838}</li> <li className="o">{detailProduct.o839}</li> <li className="o">{detailProduct.o840}</li>
<li className="ques1">{detailProduct.mcq169}</li> <li className="o">{detailProduct.o841}</li> <li className="o">{detailProduct.o842}</li> <li className="o">{detailProduct.o843}</li> <li className="o">{detailProduct.o844}</li> <li className="o">{detailProduct.o845}</li>
<li className="ques1">{detailProduct.mcq170}</li> <li className="o">{detailProduct.o846}</li> <li className="o">{detailProduct.o847}</li> <li className="o">{detailProduct.o848}</li> <li className="o">{detailProduct.o849}</li> <li className="o">{detailProduct.o850}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="C-B" /><label className="topics" for="C-B">🔻{detailProduct.t18}</label>
<ul>
<li className="ques1">{detailProduct.mcq171}</li> <li className="o">{detailProduct.o851}</li> <li className="o">{detailProduct.o852}</li> <li className="o">{detailProduct.o853}</li> <li className="o">{detailProduct.o854}</li> <li className="o">{detailProduct.o855}</li>
<li className="ques1">{detailProduct.mcq172}</li> <li className="o">{detailProduct.o856}</li> <li className="o">{detailProduct.o857}</li> <li className="o">{detailProduct.o858}</li> <li className="o">{detailProduct.o859}</li> <li className="o">{detailProduct.o860}</li>
<li className="ques1">{detailProduct.mcq173}</li> <li className="o">{detailProduct.o861}</li> <li className="o">{detailProduct.o862}</li> <li className="o">{detailProduct.o863}</li> <li className="o">{detailProduct.o864}</li> <li className="o">{detailProduct.o865}</li>
<li className="ques1">{detailProduct.mcq174}</li> <li className="o">{detailProduct.o866}</li> <li className="o">{detailProduct.o867}</li> <li className="o">{detailProduct.o868}</li> <li className="o">{detailProduct.o869}</li> <li className="o">{detailProduct.o870}</li>
<li className="ques1">{detailProduct.mcq175}</li> <li className="o">{detailProduct.o871}</li> <li className="o">{detailProduct.o872}</li> <li className="o">{detailProduct.o873}</li> <li className="o">{detailProduct.o874}</li> <li className="o">{detailProduct.o875}</li>
<li className="ques1">{detailProduct.mcq176}</li> <li className="o">{detailProduct.o876}</li> <li className="o">{detailProduct.o877}</li> <li className="o">{detailProduct.o878}</li> <li className="o">{detailProduct.o879}</li> <li className="o">{detailProduct.o880}</li>
<li className="ques1">{detailProduct.mcq177}</li> <li className="o">{detailProduct.o881}</li> <li className="o">{detailProduct.o882}</li> <li className="o">{detailProduct.o883}</li> <li className="o">{detailProduct.o884}</li> <li className="o">{detailProduct.o885}</li>
<li className="ques1">{detailProduct.mcq178}</li> <li className="o">{detailProduct.o886}</li> <li className="o">{detailProduct.o887}</li> <li className="o">{detailProduct.o888}</li> <li className="o">{detailProduct.o889}</li> <li className="o">{detailProduct.o890}</li>
<li className="ques1">{detailProduct.mcq179}</li> <li className="o">{detailProduct.o891}</li> <li className="o">{detailProduct.o892}</li> <li className="o">{detailProduct.o893}</li> <li className="o">{detailProduct.o894}</li> <li className="o">{detailProduct.o895}</li>
<li className="ques1">{detailProduct.mcq180}</li> <li className="o">{detailProduct.o896}</li> <li className="o">{detailProduct.o897}</li> <li className="o">{detailProduct.o898}</li> <li className="o">{detailProduct.o899}</li> <li className="o">{detailProduct.o900}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="C-C" /><label className="topics" for="C-C">🔻{detailProduct.t19}</label>
<ul>
<li className="ques1">{detailProduct.mcq181}</li> <li className="o">{detailProduct.o901}</li> <li className="o">{detailProduct.o902}</li> <li className="o">{detailProduct.o903}</li> <li className="o">{detailProduct.o904}</li> <li className="o">{detailProduct.o905}</li>
<li className="ques1">{detailProduct.mcq182}</li> <li className="o">{detailProduct.o906}</li> <li className="o">{detailProduct.o907}</li> <li className="o">{detailProduct.o908}</li> <li className="o">{detailProduct.o909}</li> <li className="o">{detailProduct.o910}</li>
<li className="ques1">{detailProduct.mcq183}</li> <li className="o">{detailProduct.o911}</li> <li className="o">{detailProduct.o912}</li> <li className="o">{detailProduct.o913}</li> <li className="o">{detailProduct.o914}</li> <li className="o">{detailProduct.o915}</li>
<li className="ques1">{detailProduct.mcq184}</li> <li className="o">{detailProduct.o916}</li> <li className="o">{detailProduct.o917}</li> <li className="o">{detailProduct.o918}</li> <li className="o">{detailProduct.o919}</li> <li className="o">{detailProduct.o920}</li>
<li className="ques1">{detailProduct.mcq185}</li> <li className="o">{detailProduct.o921}</li> <li className="o">{detailProduct.o922}</li> <li className="o">{detailProduct.o923}</li> <li className="o">{detailProduct.o924}</li> <li className="o">{detailProduct.o925}</li>
<li className="ques1">{detailProduct.mcq186}</li> <li className="o">{detailProduct.o926}</li> <li className="o">{detailProduct.o927}</li> <li className="o">{detailProduct.o928}</li> <li className="o">{detailProduct.o929}</li> <li className="o">{detailProduct.o930}</li>
<li className="ques1">{detailProduct.mcq187}</li> <li className="o">{detailProduct.o931}</li> <li className="o">{detailProduct.o932}</li> <li className="o">{detailProduct.o933}</li> <li className="o">{detailProduct.o934}</li> <li className="o">{detailProduct.o935}</li>
<li className="ques1">{detailProduct.mcq188}</li> <li className="o">{detailProduct.o936}</li> <li className="o">{detailProduct.o937}</li> <li className="o">{detailProduct.o938}</li> <li className="o">{detailProduct.o939}</li> <li className="o">{detailProduct.o940}</li>
<li className="ques1">{detailProduct.mcq189}</li> <li className="o">{detailProduct.o941}</li> <li className="o">{detailProduct.o942}</li> <li className="o">{detailProduct.o943}</li> <li className="o">{detailProduct.o944}</li> <li className="o">{detailProduct.o945}</li>
<li className="ques1">{detailProduct.mcq190}</li> <li className="o">{detailProduct.o946}</li> <li className="o">{detailProduct.o947}</li> <li className="o">{detailProduct.o948}</li> <li className="o">{detailProduct.o949}</li> <li className="o">{detailProduct.o950}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="C-D" /><label className="topics" for="C-D">🔻{detailProduct.t20}</label>
<ul>
<li className="ques1">{detailProduct.mcq191}</li> <li className="o">{detailProduct.o951}</li> <li className="o">{detailProduct.o952}</li> <li className="o">{detailProduct.o953}</li> <li className="o">{detailProduct.o954}</li> <li className="o">{detailProduct.o955}</li>
<li className="ques1">{detailProduct.mcq192}</li> <li className="o">{detailProduct.o956}</li> <li className="o">{detailProduct.o957}</li> <li className="o">{detailProduct.o958}</li> <li className="o">{detailProduct.o959}</li> <li className="o">{detailProduct.o960}</li>
<li className="ques1">{detailProduct.mcq193}</li> <li className="o">{detailProduct.o961}</li> <li className="o">{detailProduct.o962}</li> <li className="o">{detailProduct.o963}</li> <li className="o">{detailProduct.o964}</li> <li className="o">{detailProduct.o965}</li>
<li className="ques1">{detailProduct.mcq194}</li> <li className="o">{detailProduct.o966}</li> <li className="o">{detailProduct.o967}</li> <li className="o">{detailProduct.o968}</li> <li className="o">{detailProduct.o969}</li> <li className="o">{detailProduct.o970}</li>
<li className="ques1">{detailProduct.mcq195}</li> <li className="o">{detailProduct.o971}</li> <li className="o">{detailProduct.o972}</li> <li className="o">{detailProduct.o973}</li> <li className="o">{detailProduct.o974}</li> <li className="o">{detailProduct.o975}</li>
<li className="ques1">{detailProduct.mcq196}</li> <li className="o">{detailProduct.o976}</li> <li className="o">{detailProduct.o977}</li> <li className="o">{detailProduct.o978}</li> <li className="o">{detailProduct.o979}</li> <li className="o">{detailProduct.o980}</li>
<li className="ques1">{detailProduct.mcq197}</li> <li className="o">{detailProduct.o981}</li> <li className="o">{detailProduct.o982}</li> <li className="o">{detailProduct.o983}</li> <li className="o">{detailProduct.o984}</li> <li className="o">{detailProduct.o985}</li>
<li className="ques1">{detailProduct.mcq198}</li> <li className="o">{detailProduct.o986}</li> <li className="o">{detailProduct.o987}</li> <li className="o">{detailProduct.o988}</li> <li className="o">{detailProduct.o989}</li> <li className="o">{detailProduct.o990}</li>
<li className="ques1">{detailProduct.mcq199}</li> <li className="o">{detailProduct.o991}</li> <li className="o">{detailProduct.o992}</li> <li className="o">{detailProduct.o993}</li> <li className="o">{detailProduct.o994}</li> <li className="o">{detailProduct.o995}</li>
<li className="ques1">{detailProduct.mcq200}</li> <li className="o">{detailProduct.o996}</li> <li className="o">{detailProduct.o997}</li> <li className="o">{detailProduct.o998}</li> <li className="o">{detailProduct.o999}</li> <li className="o">{detailProduct.o1000}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="C-E" /><label className="topics" for="C-E">🔻{detailProduct.t21}</label>
<ul>
<li className="ques1">{detailProduct.mcq201}</li> <li className="o">{detailProduct.o1001}</li> <li className="o">{detailProduct.o1002}</li> <li className="o">{detailProduct.o1003}</li> <li className="o">{detailProduct.o1004}</li> <li className="o">{detailProduct.o1005}</li>
<li className="ques1">{detailProduct.mcq202}</li> <li className="o">{detailProduct.o1006}</li> <li className="o">{detailProduct.o1007}</li> <li className="o">{detailProduct.o1008}</li> <li className="o">{detailProduct.o1009}</li> <li className="o">{detailProduct.o1010}</li>
<li className="ques1">{detailProduct.mcq203}</li> <li className="o">{detailProduct.o1011}</li> <li className="o">{detailProduct.o1012}</li> <li className="o">{detailProduct.o1013}</li> <li className="o">{detailProduct.o1014}</li> <li className="o">{detailProduct.o1015}</li>
<li className="ques1">{detailProduct.mcq204}</li> <li className="o">{detailProduct.o1016}</li> <li className="o">{detailProduct.o1017}</li> <li className="o">{detailProduct.o1018}</li> <li className="o">{detailProduct.o1019}</li> <li className="o">{detailProduct.o1020}</li>
<li className="ques1">{detailProduct.mcq205}</li> <li className="o">{detailProduct.o1021}</li> <li className="o">{detailProduct.o1022}</li> <li className="o">{detailProduct.o1023}</li> <li className="o">{detailProduct.o1024}</li> <li className="o">{detailProduct.o1025}</li>
<li className="ques1">{detailProduct.mcq206}</li> <li className="o">{detailProduct.o1026}</li> <li className="o">{detailProduct.o1027}</li> <li className="o">{detailProduct.o1028}</li> <li className="o">{detailProduct.o1029}</li> <li className="o">{detailProduct.o1030}</li>
<li className="ques1">{detailProduct.mcq207}</li> <li className="o">{detailProduct.o1031}</li> <li className="o">{detailProduct.o1032}</li> <li className="o">{detailProduct.o1033}</li> <li className="o">{detailProduct.o1034}</li> <li className="o">{detailProduct.o1035}</li>
<li className="ques1">{detailProduct.mcq208}</li> <li className="o">{detailProduct.o1036}</li> <li className="o">{detailProduct.o1037}</li> <li className="o">{detailProduct.o1038}</li> <li className="o">{detailProduct.o1039}</li> <li className="o">{detailProduct.o1040}</li>
<li className="ques1">{detailProduct.mcq209}</li> <li className="o">{detailProduct.o1041}</li> <li className="o">{detailProduct.o1042}</li> <li className="o">{detailProduct.o1043}</li> <li className="o">{detailProduct.o1044}</li> <li className="o">{detailProduct.o1045}</li>
<li className="ques1">{detailProduct.mcq210}</li> <li className="o">{detailProduct.o1046}</li> <li className="o">{detailProduct.o1047}</li> <li className="o">{detailProduct.o1048}</li> <li className="o">{detailProduct.o1049}</li> <li className="o">{detailProduct.o1050}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="C-F" /><label className="topics" for="C-F">🔻{detailProduct.t22}</label>
<ul>
<li className="ques1">{detailProduct.mcq211}</li> <li className="o">{detailProduct.o1051}</li> <li className="o">{detailProduct.o1052}</li> <li className="o">{detailProduct.o1053}</li> <li className="o">{detailProduct.o1054}</li> <li className="o">{detailProduct.o1055}</li>
<li className="ques1">{detailProduct.mcq212}</li> <li className="o">{detailProduct.o1056}</li> <li className="o">{detailProduct.o1057}</li> <li className="o">{detailProduct.o1058}</li> <li className="o">{detailProduct.o1059}</li> <li className="o">{detailProduct.o1060}</li>
<li className="ques1">{detailProduct.mcq213}</li> <li className="o">{detailProduct.o1061}</li> <li className="o">{detailProduct.o1062}</li> <li className="o">{detailProduct.o1063}</li> <li className="o">{detailProduct.o1064}</li> <li className="o">{detailProduct.o1065}</li>
<li className="ques1">{detailProduct.mcq214}</li> <li className="o">{detailProduct.o1066}</li> <li className="o">{detailProduct.o1067}</li> <li className="o">{detailProduct.o1068}</li> <li className="o">{detailProduct.o1069}</li> <li className="o">{detailProduct.o1070}</li>
<li className="ques1">{detailProduct.mcq215}</li> <li className="o">{detailProduct.o1071}</li> <li className="o">{detailProduct.o1072}</li> <li className="o">{detailProduct.o1073}</li> <li className="o">{detailProduct.o1074}</li> <li className="o">{detailProduct.o1075}</li>
<li className="ques1">{detailProduct.mcq216}</li> <li className="o">{detailProduct.o1076}</li> <li className="o">{detailProduct.o1077}</li> <li className="o">{detailProduct.o1078}</li> <li className="o">{detailProduct.o1079}</li> <li className="o">{detailProduct.o1080}</li>
<li className="ques1">{detailProduct.mcq217}</li> <li className="o">{detailProduct.o1081}</li> <li className="o">{detailProduct.o1082}</li> <li className="o">{detailProduct.o1083}</li> <li className="o">{detailProduct.o1084}</li> <li className="o">{detailProduct.o1085}</li>
<li className="ques1">{detailProduct.mcq218}</li> <li className="o">{detailProduct.o1086}</li> <li className="o">{detailProduct.o1087}</li> <li className="o">{detailProduct.o1088}</li> <li className="o">{detailProduct.o1089}</li> <li className="o">{detailProduct.o1090}</li>
<li className="ques1">{detailProduct.mcq219}</li> <li className="o">{detailProduct.o1091}</li> <li className="o">{detailProduct.o1092}</li> <li className="o">{detailProduct.o1093}</li> <li className="o">{detailProduct.o1094}</li> <li className="o">{detailProduct.o1095}</li>
<li className="ques1">{detailProduct.mcq220}</li> <li className="o">{detailProduct.o1096}</li> <li className="o">{detailProduct.o1097}</li> <li className="o">{detailProduct.o1098}</li> <li className="o">{detailProduct.o1099}</li> <li className="o">{detailProduct.o1100}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="C-G" /><label className="topics" for="C-G">🔻{detailProduct.t23}</label>
<ul>
<li className="ques1">{detailProduct.mcq221}</li> <li className="o">{detailProduct.o1101}</li> <li className="o">{detailProduct.o1102}</li> <li className="o">{detailProduct.o1103}</li> <li className="o">{detailProduct.o1104}</li> <li className="o">{detailProduct.o1105}</li>
<li className="ques1">{detailProduct.mcq222}</li> <li className="o">{detailProduct.o1106}</li> <li className="o">{detailProduct.o1107}</li> <li className="o">{detailProduct.o1108}</li> <li className="o">{detailProduct.o1109}</li> <li className="o">{detailProduct.o1110}</li>
<li className="ques1">{detailProduct.mcq223}</li> <li className="o">{detailProduct.o1111}</li> <li className="o">{detailProduct.o1112}</li> <li className="o">{detailProduct.o1113}</li> <li className="o">{detailProduct.o1114}</li> <li className="o">{detailProduct.o1115}</li>
<li className="ques1">{detailProduct.mcq224}</li> <li className="o">{detailProduct.o1116}</li> <li className="o">{detailProduct.o1117}</li> <li className="o">{detailProduct.o1118}</li> <li className="o">{detailProduct.o1119}</li> <li className="o">{detailProduct.o1120}</li>
<li className="ques1">{detailProduct.mcq225}</li> <li className="o">{detailProduct.o1121}</li> <li className="o">{detailProduct.o1122}</li> <li className="o">{detailProduct.o1123}</li> <li className="o">{detailProduct.o1124}</li> <li className="o">{detailProduct.o1125}</li>
<li className="ques1">{detailProduct.mcq226}</li> <li className="o">{detailProduct.o1126}</li> <li className="o">{detailProduct.o1127}</li> <li className="o">{detailProduct.o1128}</li> <li className="o">{detailProduct.o1129}</li> <li className="o">{detailProduct.o1130}</li>
<li className="ques1">{detailProduct.mcq227}</li> <li className="o">{detailProduct.o1131}</li> <li className="o">{detailProduct.o1132}</li> <li className="o">{detailProduct.o1133}</li> <li className="o">{detailProduct.o1134}</li> <li className="o">{detailProduct.o1135}</li>
<li className="ques1">{detailProduct.mcq228}</li> <li className="o">{detailProduct.o1136}</li> <li className="o">{detailProduct.o1137}</li> <li className="o">{detailProduct.o1138}</li> <li className="o">{detailProduct.o1139}</li> <li className="o">{detailProduct.o1140}</li>
<li className="ques1">{detailProduct.mcq229}</li> <li className="o">{detailProduct.o1141}</li> <li className="o">{detailProduct.o1142}</li> <li className="o">{detailProduct.o1143}</li> <li className="o">{detailProduct.o1144}</li> <li className="o">{detailProduct.o1145}</li>
<li className="ques1">{detailProduct.mcq230}</li> <li className="o">{detailProduct.o1146}</li> <li className="o">{detailProduct.o1147}</li> <li className="o">{detailProduct.o1148}</li> <li className="o">{detailProduct.o1149}</li> <li className="o">{detailProduct.o1150}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="C-H" /><label className="topics" for="C-H">🔻{detailProduct.t24}</label>
<ul>
<li className="ques1">{detailProduct.mcq231}</li> <li className="o">{detailProduct.o1151}</li> <li className="o">{detailProduct.o1152}</li> <li className="o">{detailProduct.o1153}</li> <li className="o">{detailProduct.o1154}</li> <li className="o">{detailProduct.o1155}</li>
<li className="ques1">{detailProduct.mcq232}</li> <li className="o">{detailProduct.o1156}</li> <li className="o">{detailProduct.o1157}</li> <li className="o">{detailProduct.o1158}</li> <li className="o">{detailProduct.o1159}</li> <li className="o">{detailProduct.o1160}</li>
<li className="ques1">{detailProduct.mcq233}</li> <li className="o">{detailProduct.o1161}</li> <li className="o">{detailProduct.o1162}</li> <li className="o">{detailProduct.o1163}</li> <li className="o">{detailProduct.o1164}</li> <li className="o">{detailProduct.o1165}</li>
<li className="ques1">{detailProduct.mcq234}</li> <li className="o">{detailProduct.o1166}</li> <li className="o">{detailProduct.o1167}</li> <li className="o">{detailProduct.o1168}</li> <li className="o">{detailProduct.o1169}</li> <li className="o">{detailProduct.o1170}</li>
<li className="ques1">{detailProduct.mcq235}</li> <li className="o">{detailProduct.o1171}</li> <li className="o">{detailProduct.o1172}</li> <li className="o">{detailProduct.o1173}</li> <li className="o">{detailProduct.o1174}</li> <li className="o">{detailProduct.o1175}</li>
<li className="ques1">{detailProduct.mcq236}</li> <li className="o">{detailProduct.o1176}</li> <li className="o">{detailProduct.o1177}</li> <li className="o">{detailProduct.o1178}</li> <li className="o">{detailProduct.o1179}</li> <li className="o">{detailProduct.o1180}</li>
<li className="ques1">{detailProduct.mcq237}</li> <li className="o">{detailProduct.o1181}</li> <li className="o">{detailProduct.o1182}</li> <li className="o">{detailProduct.o1183}</li> <li className="o">{detailProduct.o1184}</li> <li className="o">{detailProduct.o1185}</li>
<li className="ques1">{detailProduct.mcq238}</li> <li className="o">{detailProduct.o1186}</li> <li className="o">{detailProduct.o1187}</li> <li className="o">{detailProduct.o1188}</li> <li className="o">{detailProduct.o1189}</li> <li className="o">{detailProduct.o1190}</li>
<li className="ques1">{detailProduct.mcq239}</li> <li className="o">{detailProduct.o1191}</li> <li className="o">{detailProduct.o1192}</li> <li className="o">{detailProduct.o1193}</li> <li className="o">{detailProduct.o1194}</li> <li className="o">{detailProduct.o1195}</li>
<li className="ques1">{detailProduct.mcq240}</li> <li className="o">{detailProduct.o1196}</li> <li className="o">{detailProduct.o1197}</li> <li className="o">{detailProduct.o1198}</li> <li className="o">{detailProduct.o1199}</li> <li className="o">{detailProduct.o1200}</li>
 </ul></div></li></ul>
   
     
     </div></div>

     <div className="multi-level"><div className="item"><input type="checkbox" id="D" /><label className="lesson" for="D">{detailProduct.c4}</label>
     <ul><li><div className="sub-item"><input type="checkbox" id="D-A" /><label className="topics" for="D-A">🔻{detailProduct.t25}</label>
<ul>
<li className="ques1">{detailProduct.mcq241}</li> <li className="o">{detailProduct.o1201}</li> <li className="o">{detailProduct.o1202}</li> <li className="o">{detailProduct.o1203}</li> <li className="o">{detailProduct.o1204}</li> <li className="o">{detailProduct.o1205}</li>
<li className="ques1">{detailProduct.mcq242}</li> <li className="o">{detailProduct.o1206}</li> <li className="o">{detailProduct.o1207}</li> <li className="o">{detailProduct.o1208}</li> <li className="o">{detailProduct.o1209}</li> <li className="o">{detailProduct.o1210}</li>
<li className="ques1">{detailProduct.mcq243}</li> <li className="o">{detailProduct.o1211}</li> <li className="o">{detailProduct.o1212}</li> <li className="o">{detailProduct.o1213}</li> <li className="o">{detailProduct.o1214}</li> <li className="o">{detailProduct.o1215}</li>
<li className="ques1">{detailProduct.mcq244}</li> <li className="o">{detailProduct.o1216}</li> <li className="o">{detailProduct.o1217}</li> <li className="o">{detailProduct.o1218}</li> <li className="o">{detailProduct.o1219}</li> <li className="o">{detailProduct.o1220}</li>
<li className="ques1">{detailProduct.mcq245}</li> <li className="o">{detailProduct.o1221}</li> <li className="o">{detailProduct.o1222}</li> <li className="o">{detailProduct.o1223}</li> <li className="o">{detailProduct.o1224}</li> <li className="o">{detailProduct.o1225}</li>
<li className="ques1">{detailProduct.mcq246}</li> <li className="o">{detailProduct.o1226}</li> <li className="o">{detailProduct.o1227}</li> <li className="o">{detailProduct.o1228}</li> <li className="o">{detailProduct.o1229}</li> <li className="o">{detailProduct.o1230}</li>
<li className="ques1">{detailProduct.mcq247}</li> <li className="o">{detailProduct.o1231}</li> <li className="o">{detailProduct.o1232}</li> <li className="o">{detailProduct.o1233}</li> <li className="o">{detailProduct.o1234}</li> <li className="o">{detailProduct.o1235}</li>
<li className="ques1">{detailProduct.mcq248}</li> <li className="o">{detailProduct.o1236}</li> <li className="o">{detailProduct.o1237}</li> <li className="o">{detailProduct.o1238}</li> <li className="o">{detailProduct.o1239}</li> <li className="o">{detailProduct.o1240}</li>
<li className="ques1">{detailProduct.mcq249}</li> <li className="o">{detailProduct.o1241}</li> <li className="o">{detailProduct.o1242}</li> <li className="o">{detailProduct.o1243}</li> <li className="o">{detailProduct.o1244}</li> <li className="o">{detailProduct.o1245}</li>
<li className="ques1">{detailProduct.mcq250}</li> <li className="o">{detailProduct.o1246}</li> <li className="o">{detailProduct.o1247}</li> <li className="o">{detailProduct.o1248}</li> <li className="o">{detailProduct.o1249}</li> <li className="o">{detailProduct.o1250}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="D-B" /><label className="topics" for="D-B">🔻{detailProduct.t26}</label>
<ul>
<li className="ques1">{detailProduct.mcq251}</li> <li className="o">{detailProduct.o1251}</li> <li className="o">{detailProduct.o1252}</li> <li className="o">{detailProduct.o1253}</li> <li className="o">{detailProduct.o1254}</li> <li className="o">{detailProduct.o1255}</li>
<li className="ques1">{detailProduct.mcq252}</li> <li className="o">{detailProduct.o1256}</li> <li className="o">{detailProduct.o1257}</li> <li className="o">{detailProduct.o1258}</li> <li className="o">{detailProduct.o1259}</li> <li className="o">{detailProduct.o1260}</li>
<li className="ques1">{detailProduct.mcq253}</li> <li className="o">{detailProduct.o1261}</li> <li className="o">{detailProduct.o1262}</li> <li className="o">{detailProduct.o1263}</li> <li className="o">{detailProduct.o1264}</li> <li className="o">{detailProduct.o1265}</li>
<li className="ques1">{detailProduct.mcq254}</li> <li className="o">{detailProduct.o1266}</li> <li className="o">{detailProduct.o1267}</li> <li className="o">{detailProduct.o1268}</li> <li className="o">{detailProduct.o1269}</li> <li className="o">{detailProduct.o1270}</li>
<li className="ques1">{detailProduct.mcq255}</li> <li className="o">{detailProduct.o1271}</li> <li className="o">{detailProduct.o1272}</li> <li className="o">{detailProduct.o1273}</li> <li className="o">{detailProduct.o1274}</li> <li className="o">{detailProduct.o1275}</li>
<li className="ques1">{detailProduct.mcq256}</li> <li className="o">{detailProduct.o1276}</li> <li className="o">{detailProduct.o1277}</li> <li className="o">{detailProduct.o1278}</li> <li className="o">{detailProduct.o1279}</li> <li className="o">{detailProduct.o1280}</li>
<li className="ques1">{detailProduct.mcq257}</li> <li className="o">{detailProduct.o1281}</li> <li className="o">{detailProduct.o1282}</li> <li className="o">{detailProduct.o1283}</li> <li className="o">{detailProduct.o1284}</li> <li className="o">{detailProduct.o1285}</li>
<li className="ques1">{detailProduct.mcq258}</li> <li className="o">{detailProduct.o1286}</li> <li className="o">{detailProduct.o1287}</li> <li className="o">{detailProduct.o1288}</li> <li className="o">{detailProduct.o1289}</li> <li className="o">{detailProduct.o1290}</li>
<li className="ques1">{detailProduct.mcq259}</li> <li className="o">{detailProduct.o1291}</li> <li className="o">{detailProduct.o1292}</li> <li className="o">{detailProduct.o1293}</li> <li className="o">{detailProduct.o1294}</li> <li className="o">{detailProduct.o1295}</li>
<li className="ques1">{detailProduct.mcq260}</li> <li className="o">{detailProduct.o1296}</li> <li className="o">{detailProduct.o1297}</li> <li className="o">{detailProduct.o1298}</li> <li className="o">{detailProduct.o1299}</li> <li className="o">{detailProduct.o1300}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="D-C" /><label className="topics" for="D-C">🔻{detailProduct.t27}</label>
<ul>
<li className="ques1">{detailProduct.mcq261}</li> <li className="o">{detailProduct.o1301}</li> <li className="o">{detailProduct.o1302}</li> <li className="o">{detailProduct.o1303}</li> <li className="o">{detailProduct.o1304}</li> <li className="o">{detailProduct.o1305}</li>
<li className="ques1">{detailProduct.mcq262}</li> <li className="o">{detailProduct.o1306}</li> <li className="o">{detailProduct.o1307}</li> <li className="o">{detailProduct.o1308}</li> <li className="o">{detailProduct.o1309}</li> <li className="o">{detailProduct.o1310}</li>
<li className="ques1">{detailProduct.mcq263}</li> <li className="o">{detailProduct.o1311}</li> <li className="o">{detailProduct.o1312}</li> <li className="o">{detailProduct.o1313}</li> <li className="o">{detailProduct.o1314}</li> <li className="o">{detailProduct.o1315}</li>
<li className="ques1">{detailProduct.mcq264}</li> <li className="o">{detailProduct.o1316}</li> <li className="o">{detailProduct.o1317}</li> <li className="o">{detailProduct.o1318}</li> <li className="o">{detailProduct.o1319}</li> <li className="o">{detailProduct.o1320}</li>
<li className="ques1">{detailProduct.mcq265}</li> <li className="o">{detailProduct.o1321}</li> <li className="o">{detailProduct.o1322}</li> <li className="o">{detailProduct.o1323}</li> <li className="o">{detailProduct.o1324}</li> <li className="o">{detailProduct.o1325}</li>
<li className="ques1">{detailProduct.mcq266}</li> <li className="o">{detailProduct.o1326}</li> <li className="o">{detailProduct.o1327}</li> <li className="o">{detailProduct.o1328}</li> <li className="o">{detailProduct.o1329}</li> <li className="o">{detailProduct.o1330}</li>
<li className="ques1">{detailProduct.mcq267}</li> <li className="o">{detailProduct.o1331}</li> <li className="o">{detailProduct.o1332}</li> <li className="o">{detailProduct.o1333}</li> <li className="o">{detailProduct.o1334}</li> <li className="o">{detailProduct.o1335}</li>
<li className="ques1">{detailProduct.mcq268}</li> <li className="o">{detailProduct.o1336}</li> <li className="o">{detailProduct.o1337}</li> <li className="o">{detailProduct.o1338}</li> <li className="o">{detailProduct.o1339}</li> <li className="o">{detailProduct.o1340}</li>
<li className="ques1">{detailProduct.mcq269}</li> <li className="o">{detailProduct.o1341}</li> <li className="o">{detailProduct.o1342}</li> <li className="o">{detailProduct.o1343}</li> <li className="o">{detailProduct.o1344}</li> <li className="o">{detailProduct.o1345}</li>
<li className="ques1">{detailProduct.mcq270}</li> <li className="o">{detailProduct.o1346}</li> <li className="o">{detailProduct.o1347}</li> <li className="o">{detailProduct.o1348}</li> <li className="o">{detailProduct.o1349}</li> <li className="o">{detailProduct.o1350}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="D-D" /><label className="topics" for="D-D">🔻{detailProduct.t28}</label>
<ul>
<li className="ques1">{detailProduct.mcq271}</li> <li className="o">{detailProduct.o1351}</li> <li className="o">{detailProduct.o1352}</li> <li className="o">{detailProduct.o1353}</li> <li className="o">{detailProduct.o1354}</li> <li className="o">{detailProduct.o1355}</li>
<li className="ques1">{detailProduct.mcq272}</li> <li className="o">{detailProduct.o1356}</li> <li className="o">{detailProduct.o1357}</li> <li className="o">{detailProduct.o1358}</li> <li className="o">{detailProduct.o1359}</li> <li className="o">{detailProduct.o1360}</li>
<li className="ques1">{detailProduct.mcq273}</li> <li className="o">{detailProduct.o1361}</li> <li className="o">{detailProduct.o1362}</li> <li className="o">{detailProduct.o1363}</li> <li className="o">{detailProduct.o1364}</li> <li className="o">{detailProduct.o1365}</li>
<li className="ques1">{detailProduct.mcq274}</li> <li className="o">{detailProduct.o1366}</li> <li className="o">{detailProduct.o1367}</li> <li className="o">{detailProduct.o1368}</li> <li className="o">{detailProduct.o1369}</li> <li className="o">{detailProduct.o1370}</li>
<li className="ques1">{detailProduct.mcq275}</li> <li className="o">{detailProduct.o1371}</li> <li className="o">{detailProduct.o1372}</li> <li className="o">{detailProduct.o1373}</li> <li className="o">{detailProduct.o1374}</li> <li className="o">{detailProduct.o1375}</li>
<li className="ques1">{detailProduct.mcq276}</li> <li className="o">{detailProduct.o1376}</li> <li className="o">{detailProduct.o1377}</li> <li className="o">{detailProduct.o1378}</li> <li className="o">{detailProduct.o1379}</li> <li className="o">{detailProduct.o1380}</li>
<li className="ques1">{detailProduct.mcq277}</li> <li className="o">{detailProduct.o1381}</li> <li className="o">{detailProduct.o1382}</li> <li className="o">{detailProduct.o1383}</li> <li className="o">{detailProduct.o1384}</li> <li className="o">{detailProduct.o1385}</li>
<li className="ques1">{detailProduct.mcq278}</li> <li className="o">{detailProduct.o1386}</li> <li className="o">{detailProduct.o1387}</li> <li className="o">{detailProduct.o1388}</li> <li className="o">{detailProduct.o1389}</li> <li className="o">{detailProduct.o1390}</li>
<li className="ques1">{detailProduct.mcq279}</li> <li className="o">{detailProduct.o1391}</li> <li className="o">{detailProduct.o1392}</li> <li className="o">{detailProduct.o1393}</li> <li className="o">{detailProduct.o1394}</li> <li className="o">{detailProduct.o1395}</li>
<li className="ques1">{detailProduct.mcq280}</li> <li className="o">{detailProduct.o1396}</li> <li className="o">{detailProduct.o1397}</li> <li className="o">{detailProduct.o1398}</li> <li className="o">{detailProduct.o1399}</li> <li className="o">{detailProduct.o1400}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="D-E" /><label className="topics" for="D-E">🔻{detailProduct.t29}</label>
<ul>
<li className="ques1">{detailProduct.mcq281}</li> <li className="o">{detailProduct.o1401}</li> <li className="o">{detailProduct.o1402}</li> <li className="o">{detailProduct.o1403}</li> <li className="o">{detailProduct.o1404}</li> <li className="o">{detailProduct.o1405}</li>
<li className="ques1">{detailProduct.mcq282}</li> <li className="o">{detailProduct.o1406}</li> <li className="o">{detailProduct.o1407}</li> <li className="o">{detailProduct.o1408}</li> <li className="o">{detailProduct.o1409}</li> <li className="o">{detailProduct.o1410}</li>
<li className="ques1">{detailProduct.mcq283}</li> <li className="o">{detailProduct.o1411}</li> <li className="o">{detailProduct.o1412}</li> <li className="o">{detailProduct.o1413}</li> <li className="o">{detailProduct.o1414}</li> <li className="o">{detailProduct.o1415}</li>
<li className="ques1">{detailProduct.mcq284}</li> <li className="o">{detailProduct.o1416}</li> <li className="o">{detailProduct.o1417}</li> <li className="o">{detailProduct.o1418}</li> <li className="o">{detailProduct.o1419}</li> <li className="o">{detailProduct.o1420}</li>
<li className="ques1">{detailProduct.mcq285}</li> <li className="o">{detailProduct.o1421}</li> <li className="o">{detailProduct.o1422}</li> <li className="o">{detailProduct.o1423}</li> <li className="o">{detailProduct.o1424}</li> <li className="o">{detailProduct.o1425}</li>
<li className="ques1">{detailProduct.mcq286}</li> <li className="o">{detailProduct.o1426}</li> <li className="o">{detailProduct.o1427}</li> <li className="o">{detailProduct.o1428}</li> <li className="o">{detailProduct.o1429}</li> <li className="o">{detailProduct.o1430}</li>
<li className="ques1">{detailProduct.mcq287}</li> <li className="o">{detailProduct.o1431}</li> <li className="o">{detailProduct.o1432}</li> <li className="o">{detailProduct.o1433}</li> <li className="o">{detailProduct.o1434}</li> <li className="o">{detailProduct.o1435}</li>
<li className="ques1">{detailProduct.mcq288}</li> <li className="o">{detailProduct.o1436}</li> <li className="o">{detailProduct.o1437}</li> <li className="o">{detailProduct.o1438}</li> <li className="o">{detailProduct.o1439}</li> <li className="o">{detailProduct.o1440}</li>
<li className="ques1">{detailProduct.mcq289}</li> <li className="o">{detailProduct.o1441}</li> <li className="o">{detailProduct.o1442}</li> <li className="o">{detailProduct.o1443}</li> <li className="o">{detailProduct.o1444}</li> <li className="o">{detailProduct.o1445}</li>
<li className="ques1">{detailProduct.mcq290}</li> <li className="o">{detailProduct.o1446}</li> <li className="o">{detailProduct.o1447}</li> <li className="o">{detailProduct.o1448}</li> <li className="o">{detailProduct.o1449}</li> <li className="o">{detailProduct.o1450}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="D-F" /><label className="topics" for="D-F">🔻{detailProduct.t30}</label>
<ul>
<li className="ques1">{detailProduct.mcq291}</li> <li className="o">{detailProduct.o1451}</li> <li className="o">{detailProduct.o1452}</li> <li className="o">{detailProduct.o1453}</li> <li className="o">{detailProduct.o1454}</li> <li className="o">{detailProduct.o1455}</li>
<li className="ques1">{detailProduct.mcq292}</li> <li className="o">{detailProduct.o1456}</li> <li className="o">{detailProduct.o1457}</li> <li className="o">{detailProduct.o1458}</li> <li className="o">{detailProduct.o1459}</li> <li className="o">{detailProduct.o1460}</li>
<li className="ques1">{detailProduct.mcq293}</li> <li className="o">{detailProduct.o1461}</li> <li className="o">{detailProduct.o1462}</li> <li className="o">{detailProduct.o1463}</li> <li className="o">{detailProduct.o1464}</li> <li className="o">{detailProduct.o1465}</li>
<li className="ques1">{detailProduct.mcq294}</li> <li className="o">{detailProduct.o1466}</li> <li className="o">{detailProduct.o1467}</li> <li className="o">{detailProduct.o1468}</li> <li className="o">{detailProduct.o1469}</li> <li className="o">{detailProduct.o1470}</li>
<li className="ques1">{detailProduct.mcq295}</li> <li className="o">{detailProduct.o1471}</li> <li className="o">{detailProduct.o1472}</li> <li className="o">{detailProduct.o1473}</li> <li className="o">{detailProduct.o1474}</li> <li className="o">{detailProduct.o1475}</li>
<li className="ques1">{detailProduct.mcq296}</li> <li className="o">{detailProduct.o1476}</li> <li className="o">{detailProduct.o1477}</li> <li className="o">{detailProduct.o1478}</li> <li className="o">{detailProduct.o1479}</li> <li className="o">{detailProduct.o1480}</li>
<li className="ques1">{detailProduct.mcq297}</li> <li className="o">{detailProduct.o1481}</li> <li className="o">{detailProduct.o1482}</li> <li className="o">{detailProduct.o1483}</li> <li className="o">{detailProduct.o1484}</li> <li className="o">{detailProduct.o1485}</li>
<li className="ques1">{detailProduct.mcq298}</li> <li className="o">{detailProduct.o1486}</li> <li className="o">{detailProduct.o1487}</li> <li className="o">{detailProduct.o1488}</li> <li className="o">{detailProduct.o1489}</li> <li className="o">{detailProduct.o1490}</li>
<li className="ques1">{detailProduct.mcq299}</li> <li className="o">{detailProduct.o1491}</li> <li className="o">{detailProduct.o1492}</li> <li className="o">{detailProduct.o1493}</li> <li className="o">{detailProduct.o1494}</li> <li className="o">{detailProduct.o1495}</li>
<li className="ques1">{detailProduct.mcq300}</li> <li className="o">{detailProduct.o1496}</li> <li className="o">{detailProduct.o1497}</li> <li className="o">{detailProduct.o1498}</li> <li className="o">{detailProduct.o1499}</li> <li className="o">{detailProduct.o1500}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="D-G" /><label className="topics" for="D-G">🔻{detailProduct.t31}</label>
<ul>
<li className="ques1">{detailProduct.mcq301}</li> <li className="o">{detailProduct.o1501}</li> <li className="o">{detailProduct.o1502}</li> <li className="o">{detailProduct.o1503}</li> <li className="o">{detailProduct.o1504}</li> <li className="o">{detailProduct.o1505}</li>
<li className="ques1">{detailProduct.mcq302}</li> <li className="o">{detailProduct.o1506}</li> <li className="o">{detailProduct.o1507}</li> <li className="o">{detailProduct.o1508}</li> <li className="o">{detailProduct.o1509}</li> <li className="o">{detailProduct.o1510}</li>
<li className="ques1">{detailProduct.mcq303}</li> <li className="o">{detailProduct.o1511}</li> <li className="o">{detailProduct.o1512}</li> <li className="o">{detailProduct.o1513}</li> <li className="o">{detailProduct.o1514}</li> <li className="o">{detailProduct.o1515}</li>
<li className="ques1">{detailProduct.mcq304}</li> <li className="o">{detailProduct.o1516}</li> <li className="o">{detailProduct.o1517}</li> <li className="o">{detailProduct.o1518}</li> <li className="o">{detailProduct.o1519}</li> <li className="o">{detailProduct.o1520}</li>
<li className="ques1">{detailProduct.mcq305}</li> <li className="o">{detailProduct.o1521}</li> <li className="o">{detailProduct.o1522}</li> <li className="o">{detailProduct.o1523}</li> <li className="o">{detailProduct.o1524}</li> <li className="o">{detailProduct.o1525}</li>
<li className="ques1">{detailProduct.mcq306}</li> <li className="o">{detailProduct.o1526}</li> <li className="o">{detailProduct.o1527}</li> <li className="o">{detailProduct.o1528}</li> <li className="o">{detailProduct.o1529}</li> <li className="o">{detailProduct.o1530}</li>
<li className="ques1">{detailProduct.mcq307}</li> <li className="o">{detailProduct.o1531}</li> <li className="o">{detailProduct.o1532}</li> <li className="o">{detailProduct.o1533}</li> <li className="o">{detailProduct.o1534}</li> <li className="o">{detailProduct.o1535}</li>
<li className="ques1">{detailProduct.mcq308}</li> <li className="o">{detailProduct.o1536}</li> <li className="o">{detailProduct.o1537}</li> <li className="o">{detailProduct.o1538}</li> <li className="o">{detailProduct.o1539}</li> <li className="o">{detailProduct.o1540}</li>
<li className="ques1">{detailProduct.mcq309}</li> <li className="o">{detailProduct.o1541}</li> <li className="o">{detailProduct.o1542}</li> <li className="o">{detailProduct.o1543}</li> <li className="o">{detailProduct.o1544}</li> <li className="o">{detailProduct.o1545}</li>
<li className="ques1">{detailProduct.mcq310}</li> <li className="o">{detailProduct.o1546}</li> <li className="o">{detailProduct.o1547}</li> <li className="o">{detailProduct.o1548}</li> <li className="o">{detailProduct.o1549}</li> <li className="o">{detailProduct.o1550}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="D-H" /><label className="topics" for="D-H">🔻{detailProduct.t32}</label>
<ul>
<li className="ques1">{detailProduct.mcq311}</li> <li className="o">{detailProduct.o1551}</li> <li className="o">{detailProduct.o1552}</li> <li className="o">{detailProduct.o1553}</li> <li className="o">{detailProduct.o1554}</li> <li className="o">{detailProduct.o1555}</li>
<li className="ques1">{detailProduct.mcq312}</li> <li className="o">{detailProduct.o1556}</li> <li className="o">{detailProduct.o1557}</li> <li className="o">{detailProduct.o1558}</li> <li className="o">{detailProduct.o1559}</li> <li className="o">{detailProduct.o1560}</li>
<li className="ques1">{detailProduct.mcq313}</li> <li className="o">{detailProduct.o1561}</li> <li className="o">{detailProduct.o1562}</li> <li className="o">{detailProduct.o1563}</li> <li className="o">{detailProduct.o1564}</li> <li className="o">{detailProduct.o1565}</li>
<li className="ques1">{detailProduct.mcq314}</li> <li className="o">{detailProduct.o1566}</li> <li className="o">{detailProduct.o1567}</li> <li className="o">{detailProduct.o1568}</li> <li className="o">{detailProduct.o1569}</li> <li className="o">{detailProduct.o1570}</li>
<li className="ques1">{detailProduct.mcq315}</li> <li className="o">{detailProduct.o1571}</li> <li className="o">{detailProduct.o1572}</li> <li className="o">{detailProduct.o1573}</li> <li className="o">{detailProduct.o1574}</li> <li className="o">{detailProduct.o1575}</li>
<li className="ques1">{detailProduct.mcq316}</li> <li className="o">{detailProduct.o1576}</li> <li className="o">{detailProduct.o1577}</li> <li className="o">{detailProduct.o1578}</li> <li className="o">{detailProduct.o1579}</li> <li className="o">{detailProduct.o1580}</li>
<li className="ques1">{detailProduct.mcq317}</li> <li className="o">{detailProduct.o1581}</li> <li className="o">{detailProduct.o1582}</li> <li className="o">{detailProduct.o1583}</li> <li className="o">{detailProduct.o1584}</li> <li className="o">{detailProduct.o1585}</li>
<li className="ques1">{detailProduct.mcq318}</li> <li className="o">{detailProduct.o1586}</li> <li className="o">{detailProduct.o1587}</li> <li className="o">{detailProduct.o1588}</li> <li className="o">{detailProduct.o1589}</li> <li className="o">{detailProduct.o1590}</li>
<li className="ques1">{detailProduct.mcq319}</li> <li className="o">{detailProduct.o1591}</li> <li className="o">{detailProduct.o1592}</li> <li className="o">{detailProduct.o1593}</li> <li className="o">{detailProduct.o1594}</li> <li className="o">{detailProduct.o1595}</li>
<li className="ques1">{detailProduct.mcq320}</li> <li className="o">{detailProduct.o1596}</li> <li className="o">{detailProduct.o1597}</li> <li className="o">{detailProduct.o1598}</li> <li className="o">{detailProduct.o1599}</li> <li className="o">{detailProduct.o1600}</li>
</ul></div></li></ul>

</div></div>

     <div className="multi-level"><div className="item"><input type="checkbox" id="E" /><label className="lesson" for="E">{detailProduct.c5}</label>
     <ul><li><div className="sub-item"><input type="checkbox" id="E-A" /><label className="topics" for="E-A">🔻{detailProduct.t33}</label>
<ul>
<li className="ques1">{detailProduct.mcq321}</li> <li className="o">{detailProduct.o1601}</li> <li className="o">{detailProduct.o1602}</li> <li className="o">{detailProduct.o1603}</li> <li className="o">{detailProduct.o1604}</li> <li className="o">{detailProduct.o1605}</li>
<li className="ques1">{detailProduct.mcq322}</li> <li className="o">{detailProduct.o1606}</li> <li className="o">{detailProduct.o1607}</li> <li className="o">{detailProduct.o1608}</li> <li className="o">{detailProduct.o1609}</li> <li className="o">{detailProduct.o1610}</li>
<li className="ques1">{detailProduct.mcq323}</li> <li className="o">{detailProduct.o1611}</li> <li className="o">{detailProduct.o1612}</li> <li className="o">{detailProduct.o1613}</li> <li className="o">{detailProduct.o1614}</li> <li className="o">{detailProduct.o1615}</li>
<li className="ques1">{detailProduct.mcq324}</li> <li className="o">{detailProduct.o1616}</li> <li className="o">{detailProduct.o1617}</li> <li className="o">{detailProduct.o1618}</li> <li className="o">{detailProduct.o1619}</li> <li className="o">{detailProduct.o1620}</li>
<li className="ques1">{detailProduct.mcq325}</li> <li className="o">{detailProduct.o1621}</li> <li className="o">{detailProduct.o1622}</li> <li className="o">{detailProduct.o1623}</li> <li className="o">{detailProduct.o1624}</li> <li className="o">{detailProduct.o1625}</li>
<li className="ques1">{detailProduct.mcq326}</li> <li className="o">{detailProduct.o1626}</li> <li className="o">{detailProduct.o1627}</li> <li className="o">{detailProduct.o1628}</li> <li className="o">{detailProduct.o1629}</li> <li className="o">{detailProduct.o1630}</li>
<li className="ques1">{detailProduct.mcq327}</li> <li className="o">{detailProduct.o1631}</li> <li className="o">{detailProduct.o1632}</li> <li className="o">{detailProduct.o1633}</li> <li className="o">{detailProduct.o1634}</li> <li className="o">{detailProduct.o1635}</li>
<li className="ques1">{detailProduct.mcq328}</li> <li className="o">{detailProduct.o1636}</li> <li className="o">{detailProduct.o1637}</li> <li className="o">{detailProduct.o1638}</li> <li className="o">{detailProduct.o1639}</li> <li className="o">{detailProduct.o1640}</li>
<li className="ques1">{detailProduct.mcq329}</li> <li className="o">{detailProduct.o1641}</li> <li className="o">{detailProduct.o1642}</li> <li className="o">{detailProduct.o1643}</li> <li className="o">{detailProduct.o1644}</li> <li className="o">{detailProduct.o1645}</li>
<li className="ques1">{detailProduct.mcq330}</li> <li className="o">{detailProduct.o1646}</li> <li className="o">{detailProduct.o1647}</li> <li className="o">{detailProduct.o1648}</li> <li className="o">{detailProduct.o1649}</li> <li className="o">{detailProduct.o1650}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="E-B" /><label className="topics" for="E-B">🔻{detailProduct.t34}</label>
<ul>
<li className="ques1">{detailProduct.mcq331}</li> <li className="o">{detailProduct.o1651}</li> <li className="o">{detailProduct.o1652}</li> <li className="o">{detailProduct.o1653}</li> <li className="o">{detailProduct.o1654}</li> <li className="o">{detailProduct.o1655}</li>
<li className="ques1">{detailProduct.mcq332}</li> <li className="o">{detailProduct.o1656}</li> <li className="o">{detailProduct.o1657}</li> <li className="o">{detailProduct.o1658}</li> <li className="o">{detailProduct.o1659}</li> <li className="o">{detailProduct.o1660}</li>
<li className="ques1">{detailProduct.mcq333}</li> <li className="o">{detailProduct.o1661}</li> <li className="o">{detailProduct.o1662}</li> <li className="o">{detailProduct.o1663}</li> <li className="o">{detailProduct.o1664}</li> <li className="o">{detailProduct.o1665}</li>
<li className="ques1">{detailProduct.mcq334}</li> <li className="o">{detailProduct.o1666}</li> <li className="o">{detailProduct.o1667}</li> <li className="o">{detailProduct.o1668}</li> <li className="o">{detailProduct.o1669}</li> <li className="o">{detailProduct.o1670}</li>
<li className="ques1">{detailProduct.mcq335}</li> <li className="o">{detailProduct.o1671}</li> <li className="o">{detailProduct.o1672}</li> <li className="o">{detailProduct.o1673}</li> <li className="o">{detailProduct.o1674}</li> <li className="o">{detailProduct.o1675}</li>
<li className="ques1">{detailProduct.mcq336}</li> <li className="o">{detailProduct.o1676}</li> <li className="o">{detailProduct.o1677}</li> <li className="o">{detailProduct.o1678}</li> <li className="o">{detailProduct.o1679}</li> <li className="o">{detailProduct.o1680}</li>
<li className="ques1">{detailProduct.mcq337}</li> <li className="o">{detailProduct.o1681}</li> <li className="o">{detailProduct.o1682}</li> <li className="o">{detailProduct.o1683}</li> <li className="o">{detailProduct.o1684}</li> <li className="o">{detailProduct.o1685}</li>
<li className="ques1">{detailProduct.mcq338}</li> <li className="o">{detailProduct.o1686}</li> <li className="o">{detailProduct.o1687}</li> <li className="o">{detailProduct.o1688}</li> <li className="o">{detailProduct.o1689}</li> <li className="o">{detailProduct.o1690}</li>
<li className="ques1">{detailProduct.mcq339}</li> <li className="o">{detailProduct.o1691}</li> <li className="o">{detailProduct.o1692}</li> <li className="o">{detailProduct.o1693}</li> <li className="o">{detailProduct.o1694}</li> <li className="o">{detailProduct.o1695}</li>
<li className="ques1">{detailProduct.mcq340}</li> <li className="o">{detailProduct.o1696}</li> <li className="o">{detailProduct.o1697}</li> <li className="o">{detailProduct.o1698}</li> <li className="o">{detailProduct.o1699}</li> <li className="o">{detailProduct.o1700}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="E-C" /><label className="topics" for="E-C">🔻{detailProduct.t35}</label>
<ul>
<li className="ques1">{detailProduct.mcq341}</li> <li className="o">{detailProduct.o1701}</li> <li className="o">{detailProduct.o1702}</li> <li className="o">{detailProduct.o1703}</li> <li className="o">{detailProduct.o1704}</li> <li className="o">{detailProduct.o1705}</li>
<li className="ques1">{detailProduct.mcq342}</li> <li className="o">{detailProduct.o1706}</li> <li className="o">{detailProduct.o1707}</li> <li className="o">{detailProduct.o1708}</li> <li className="o">{detailProduct.o1709}</li> <li className="o">{detailProduct.o1710}</li>
<li className="ques1">{detailProduct.mcq343}</li> <li className="o">{detailProduct.o1711}</li> <li className="o">{detailProduct.o1712}</li> <li className="o">{detailProduct.o1713}</li> <li className="o">{detailProduct.o1714}</li> <li className="o">{detailProduct.o1715}</li>
<li className="ques1">{detailProduct.mcq344}</li> <li className="o">{detailProduct.o1716}</li> <li className="o">{detailProduct.o1717}</li> <li className="o">{detailProduct.o1718}</li> <li className="o">{detailProduct.o1719}</li> <li className="o">{detailProduct.o1720}</li>
<li className="ques1">{detailProduct.mcq345}</li> <li className="o">{detailProduct.o1721}</li> <li className="o">{detailProduct.o1722}</li> <li className="o">{detailProduct.o1723}</li> <li className="o">{detailProduct.o1724}</li> <li className="o">{detailProduct.o1725}</li>
<li className="ques1">{detailProduct.mcq346}</li> <li className="o">{detailProduct.o1726}</li> <li className="o">{detailProduct.o1727}</li> <li className="o">{detailProduct.o1728}</li> <li className="o">{detailProduct.o1729}</li> <li className="o">{detailProduct.o1730}</li>
<li className="ques1">{detailProduct.mcq347}</li> <li className="o">{detailProduct.o1731}</li> <li className="o">{detailProduct.o1732}</li> <li className="o">{detailProduct.o1733}</li> <li className="o">{detailProduct.o1734}</li> <li className="o">{detailProduct.o1735}</li>
<li className="ques1">{detailProduct.mcq348}</li> <li className="o">{detailProduct.o1736}</li> <li className="o">{detailProduct.o1737}</li> <li className="o">{detailProduct.o1738}</li> <li className="o">{detailProduct.o1739}</li> <li className="o">{detailProduct.o1740}</li>
<li className="ques1">{detailProduct.mcq349}</li> <li className="o">{detailProduct.o1741}</li> <li className="o">{detailProduct.o1742}</li> <li className="o">{detailProduct.o1743}</li> <li className="o">{detailProduct.o1744}</li> <li className="o">{detailProduct.o1745}</li>
<li className="ques1">{detailProduct.mcq350}</li> <li className="o">{detailProduct.o1746}</li> <li className="o">{detailProduct.o1747}</li> <li className="o">{detailProduct.o1748}</li> <li className="o">{detailProduct.o1749}</li> <li className="o">{detailProduct.o1750}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="E-D" /><label className="topics" for="E-D">🔻{detailProduct.t36}</label>
<ul>
<li className="ques1">{detailProduct.mcq351}</li> <li className="o">{detailProduct.o1751}</li> <li className="o">{detailProduct.o1752}</li> <li className="o">{detailProduct.o1753}</li> <li className="o">{detailProduct.o1754}</li> <li className="o">{detailProduct.o1755}</li>
<li className="ques1">{detailProduct.mcq352}</li> <li className="o">{detailProduct.o1756}</li> <li className="o">{detailProduct.o1757}</li> <li className="o">{detailProduct.o1758}</li> <li className="o">{detailProduct.o1759}</li> <li className="o">{detailProduct.o1760}</li>
<li className="ques1">{detailProduct.mcq353}</li> <li className="o">{detailProduct.o1761}</li> <li className="o">{detailProduct.o1762}</li> <li className="o">{detailProduct.o1763}</li> <li className="o">{detailProduct.o1764}</li> <li className="o">{detailProduct.o1765}</li>
<li className="ques1">{detailProduct.mcq354}</li> <li className="o">{detailProduct.o1766}</li> <li className="o">{detailProduct.o1767}</li> <li className="o">{detailProduct.o1768}</li> <li className="o">{detailProduct.o1769}</li> <li className="o">{detailProduct.o1770}</li>
<li className="ques1">{detailProduct.mcq355}</li> <li className="o">{detailProduct.o1771}</li> <li className="o">{detailProduct.o1772}</li> <li className="o">{detailProduct.o1773}</li> <li className="o">{detailProduct.o1774}</li> <li className="o">{detailProduct.o1775}</li>
<li className="ques1">{detailProduct.mcq356}</li> <li className="o">{detailProduct.o1776}</li> <li className="o">{detailProduct.o1777}</li> <li className="o">{detailProduct.o1778}</li> <li className="o">{detailProduct.o1779}</li> <li className="o">{detailProduct.o1780}</li>
<li className="ques1">{detailProduct.mcq357}</li> <li className="o">{detailProduct.o1781}</li> <li className="o">{detailProduct.o1782}</li> <li className="o">{detailProduct.o1783}</li> <li className="o">{detailProduct.o1784}</li> <li className="o">{detailProduct.o1785}</li>
<li className="ques1">{detailProduct.mcq358}</li> <li className="o">{detailProduct.o1786}</li> <li className="o">{detailProduct.o1787}</li> <li className="o">{detailProduct.o1788}</li> <li className="o">{detailProduct.o1789}</li> <li className="o">{detailProduct.o1790}</li>
<li className="ques1">{detailProduct.mcq359}</li> <li className="o">{detailProduct.o1791}</li> <li className="o">{detailProduct.o1792}</li> <li className="o">{detailProduct.o1793}</li> <li className="o">{detailProduct.o1794}</li> <li className="o">{detailProduct.o1795}</li>
<li className="ques1">{detailProduct.mcq360}</li> <li className="o">{detailProduct.o1796}</li> <li className="o">{detailProduct.o1797}</li> <li className="o">{detailProduct.o1798}</li> <li className="o">{detailProduct.o1799}</li> <li className="o">{detailProduct.o1800}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="E-E" /><label className="topics" for="E-E">🔻{detailProduct.t37}</label>
<ul>
<li className="ques1">{detailProduct.mcq361}</li> <li className="o">{detailProduct.o1801}</li> <li className="o">{detailProduct.o1802}</li> <li className="o">{detailProduct.o1803}</li> <li className="o">{detailProduct.o1804}</li> <li className="o">{detailProduct.o1805}</li>
<li className="ques1">{detailProduct.mcq362}</li> <li className="o">{detailProduct.o1806}</li> <li className="o">{detailProduct.o1807}</li> <li className="o">{detailProduct.o1808}</li> <li className="o">{detailProduct.o1809}</li> <li className="o">{detailProduct.o1810}</li>
<li className="ques1">{detailProduct.mcq363}</li> <li className="o">{detailProduct.o1811}</li> <li className="o">{detailProduct.o1812}</li> <li className="o">{detailProduct.o1813}</li> <li className="o">{detailProduct.o1814}</li> <li className="o">{detailProduct.o1815}</li>
<li className="ques1">{detailProduct.mcq364}</li> <li className="o">{detailProduct.o1816}</li> <li className="o">{detailProduct.o1817}</li> <li className="o">{detailProduct.o1818}</li> <li className="o">{detailProduct.o1819}</li> <li className="o">{detailProduct.o1820}</li>
<li className="ques1">{detailProduct.mcq365}</li> <li className="o">{detailProduct.o1821}</li> <li className="o">{detailProduct.o1822}</li> <li className="o">{detailProduct.o1823}</li> <li className="o">{detailProduct.o1824}</li> <li className="o">{detailProduct.o1825}</li>
<li className="ques1">{detailProduct.mcq366}</li> <li className="o">{detailProduct.o1826}</li> <li className="o">{detailProduct.o1827}</li> <li className="o">{detailProduct.o1828}</li> <li className="o">{detailProduct.o1829}</li> <li className="o">{detailProduct.o1830}</li>
<li className="ques1">{detailProduct.mcq367}</li> <li className="o">{detailProduct.o1831}</li> <li className="o">{detailProduct.o1832}</li> <li className="o">{detailProduct.o1833}</li> <li className="o">{detailProduct.o1834}</li> <li className="o">{detailProduct.o1835}</li>
<li className="ques1">{detailProduct.mcq368}</li> <li className="o">{detailProduct.o1836}</li> <li className="o">{detailProduct.o1837}</li> <li className="o">{detailProduct.o1838}</li> <li className="o">{detailProduct.o1839}</li> <li className="o">{detailProduct.o1840}</li>
<li className="ques1">{detailProduct.mcq369}</li> <li className="o">{detailProduct.o1841}</li> <li className="o">{detailProduct.o1842}</li> <li className="o">{detailProduct.o1843}</li> <li className="o">{detailProduct.o1844}</li> <li className="o">{detailProduct.o1845}</li>
<li className="ques1">{detailProduct.mcq370}</li> <li className="o">{detailProduct.o1846}</li> <li className="o">{detailProduct.o1847}</li> <li className="o">{detailProduct.o1848}</li> <li className="o">{detailProduct.o1849}</li> <li className="o">{detailProduct.o1850}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="E-F" /><label className="topics" for="E-F">🔻{detailProduct.t38}</label>
<ul>
<li className="ques1">{detailProduct.mcq371}</li> <li className="o">{detailProduct.o1851}</li> <li className="o">{detailProduct.o1852}</li> <li className="o">{detailProduct.o1853}</li> <li className="o">{detailProduct.o1854}</li> <li className="o">{detailProduct.o1855}</li>
<li className="ques1">{detailProduct.mcq372}</li> <li className="o">{detailProduct.o1856}</li> <li className="o">{detailProduct.o1857}</li> <li className="o">{detailProduct.o1858}</li> <li className="o">{detailProduct.o1859}</li> <li className="o">{detailProduct.o1860}</li>
<li className="ques1">{detailProduct.mcq373}</li> <li className="o">{detailProduct.o1861}</li> <li className="o">{detailProduct.o1862}</li> <li className="o">{detailProduct.o1863}</li> <li className="o">{detailProduct.o1864}</li> <li className="o">{detailProduct.o1865}</li>
<li className="ques1">{detailProduct.mcq374}</li> <li className="o">{detailProduct.o1866}</li> <li className="o">{detailProduct.o1867}</li> <li className="o">{detailProduct.o1868}</li> <li className="o">{detailProduct.o1869}</li> <li className="o">{detailProduct.o1870}</li>
<li className="ques1">{detailProduct.mcq375}</li> <li className="o">{detailProduct.o1871}</li> <li className="o">{detailProduct.o1872}</li> <li className="o">{detailProduct.o1873}</li> <li className="o">{detailProduct.o1874}</li> <li className="o">{detailProduct.o1875}</li>
<li className="ques1">{detailProduct.mcq376}</li> <li className="o">{detailProduct.o1876}</li> <li className="o">{detailProduct.o1877}</li> <li className="o">{detailProduct.o1878}</li> <li className="o">{detailProduct.o1879}</li> <li className="o">{detailProduct.o1880}</li>
<li className="ques1">{detailProduct.mcq377}</li> <li className="o">{detailProduct.o1881}</li> <li className="o">{detailProduct.o1882}</li> <li className="o">{detailProduct.o1883}</li> <li className="o">{detailProduct.o1884}</li> <li className="o">{detailProduct.o1885}</li>
<li className="ques1">{detailProduct.mcq378}</li> <li className="o">{detailProduct.o1886}</li> <li className="o">{detailProduct.o1887}</li> <li className="o">{detailProduct.o1888}</li> <li className="o">{detailProduct.o1889}</li> <li className="o">{detailProduct.o1890}</li>
<li className="ques1">{detailProduct.mcq379}</li> <li className="o">{detailProduct.o1891}</li> <li className="o">{detailProduct.o1892}</li> <li className="o">{detailProduct.o1893}</li> <li className="o">{detailProduct.o1894}</li> <li className="o">{detailProduct.o1895}</li>
<li className="ques1">{detailProduct.mcq380}</li> <li className="o">{detailProduct.o1896}</li> <li className="o">{detailProduct.o1897}</li> <li className="o">{detailProduct.o1898}</li> <li className="o">{detailProduct.o1899}</li> <li className="o">{detailProduct.o1900}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="E-G" /><label className="topics" for="E-G">🔻{detailProduct.t39}</label>
<ul>
<li className="ques1">{detailProduct.mcq381}</li> <li className="o">{detailProduct.o1901}</li> <li className="o">{detailProduct.o1902}</li> <li className="o">{detailProduct.o1903}</li> <li className="o">{detailProduct.o1904}</li> <li className="o">{detailProduct.o1905}</li>
<li className="ques1">{detailProduct.mcq382}</li> <li className="o">{detailProduct.o1906}</li> <li className="o">{detailProduct.o1907}</li> <li className="o">{detailProduct.o1908}</li> <li className="o">{detailProduct.o1909}</li> <li className="o">{detailProduct.o1910}</li>
<li className="ques1">{detailProduct.mcq383}</li> <li className="o">{detailProduct.o1911}</li> <li className="o">{detailProduct.o1912}</li> <li className="o">{detailProduct.o1913}</li> <li className="o">{detailProduct.o1914}</li> <li className="o">{detailProduct.o1915}</li>
<li className="ques1">{detailProduct.mcq384}</li> <li className="o">{detailProduct.o1916}</li> <li className="o">{detailProduct.o1917}</li> <li className="o">{detailProduct.o1918}</li> <li className="o">{detailProduct.o1919}</li> <li className="o">{detailProduct.o1920}</li>
<li className="ques1">{detailProduct.mcq385}</li> <li className="o">{detailProduct.o1921}</li> <li className="o">{detailProduct.o1922}</li> <li className="o">{detailProduct.o1923}</li> <li className="o">{detailProduct.o1924}</li> <li className="o">{detailProduct.o1925}</li>
<li className="ques1">{detailProduct.mcq386}</li> <li className="o">{detailProduct.o1926}</li> <li className="o">{detailProduct.o1927}</li> <li className="o">{detailProduct.o1928}</li> <li className="o">{detailProduct.o1929}</li> <li className="o">{detailProduct.o1930}</li>
<li className="ques1">{detailProduct.mcq387}</li> <li className="o">{detailProduct.o1931}</li> <li className="o">{detailProduct.o1932}</li> <li className="o">{detailProduct.o1933}</li> <li className="o">{detailProduct.o1934}</li> <li className="o">{detailProduct.o1935}</li>
<li className="ques1">{detailProduct.mcq388}</li> <li className="o">{detailProduct.o1936}</li> <li className="o">{detailProduct.o1937}</li> <li className="o">{detailProduct.o1938}</li> <li className="o">{detailProduct.o1939}</li> <li className="o">{detailProduct.o1940}</li>
<li className="ques1">{detailProduct.mcq389}</li> <li className="o">{detailProduct.o1941}</li> <li className="o">{detailProduct.o1942}</li> <li className="o">{detailProduct.o1943}</li> <li className="o">{detailProduct.o1944}</li> <li className="o">{detailProduct.o1945}</li>
<li className="ques1">{detailProduct.mcq390}</li> <li className="o">{detailProduct.o1946}</li> <li className="o">{detailProduct.o1947}</li> <li className="o">{detailProduct.o1948}</li> <li className="o">{detailProduct.o1949}</li> <li className="o">{detailProduct.o1950}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="E-H" /><label className="topics" for="E-H">🔻{detailProduct.t40}</label>
<ul>
<li className="ques1">{detailProduct.mcq391}</li> <li className="o">{detailProduct.o1951}</li> <li className="o">{detailProduct.o1952}</li> <li className="o">{detailProduct.o1953}</li> <li className="o">{detailProduct.o1954}</li> <li className="o">{detailProduct.o1955}</li>
<li className="ques1">{detailProduct.mcq392}</li> <li className="o">{detailProduct.o1956}</li> <li className="o">{detailProduct.o1957}</li> <li className="o">{detailProduct.o1958}</li> <li className="o">{detailProduct.o1959}</li> <li className="o">{detailProduct.o1960}</li>
<li className="ques1">{detailProduct.mcq393}</li> <li className="o">{detailProduct.o1961}</li> <li className="o">{detailProduct.o1962}</li> <li className="o">{detailProduct.o1963}</li> <li className="o">{detailProduct.o1964}</li> <li className="o">{detailProduct.o1965}</li>
<li className="ques1">{detailProduct.mcq394}</li> <li className="o">{detailProduct.o1966}</li> <li className="o">{detailProduct.o1967}</li> <li className="o">{detailProduct.o1968}</li> <li className="o">{detailProduct.o1969}</li> <li className="o">{detailProduct.o1970}</li>
<li className="ques1">{detailProduct.mcq395}</li> <li className="o">{detailProduct.o1971}</li> <li className="o">{detailProduct.o1972}</li> <li className="o">{detailProduct.o1973}</li> <li className="o">{detailProduct.o1974}</li> <li className="o">{detailProduct.o1975}</li>
<li className="ques1">{detailProduct.mcq396}</li> <li className="o">{detailProduct.o1976}</li> <li className="o">{detailProduct.o1977}</li> <li className="o">{detailProduct.o1978}</li> <li className="o">{detailProduct.o1979}</li> <li className="o">{detailProduct.o1980}</li>
<li className="ques1">{detailProduct.mcq397}</li> <li className="o">{detailProduct.o1981}</li> <li className="o">{detailProduct.o1982}</li> <li className="o">{detailProduct.o1983}</li> <li className="o">{detailProduct.o1984}</li> <li className="o">{detailProduct.o1985}</li>
<li className="ques1">{detailProduct.mcq398}</li> <li className="o">{detailProduct.o1986}</li> <li className="o">{detailProduct.o1987}</li> <li className="o">{detailProduct.o1988}</li> <li className="o">{detailProduct.o1989}</li> <li className="o">{detailProduct.o1990}</li>
<li className="ques1">{detailProduct.mcq399}</li> <li className="o">{detailProduct.o1991}</li> <li className="o">{detailProduct.o1992}</li> <li className="o">{detailProduct.o1993}</li> <li className="o">{detailProduct.o1994}</li> <li className="o">{detailProduct.o1995}</li>
<li className="ques1">{detailProduct.mcq400}</li> <li className="o">{detailProduct.o1996}</li> <li className="o">{detailProduct.o1997}</li> <li className="o">{detailProduct.o1998}</li> <li className="o">{detailProduct.o1999}</li> <li className="o">{detailProduct.o2000}</li>
 </ul></div></li></ul>
     
     </div></div>

     <div className="multi-level"><div className="item"><input type="checkbox" id="F" /><label className="lesson" for="F">{detailProduct.c6}</label>
     <ul><li><div className="sub-item"><input type="checkbox" id="F-A" /><label className="topics" for="F-A">🔻{detailProduct.t41}</label>
<ul>
<li className="ques1">{detailProduct.mcq401}</li> <li className="o">{detailProduct.o2001}</li> <li className="o">{detailProduct.o2002}</li> <li className="o">{detailProduct.o2003}</li> <li className="o">{detailProduct.o2004}</li> <li className="o">{detailProduct.o2005}</li>
<li className="ques1">{detailProduct.mcq402}</li> <li className="o">{detailProduct.o2006}</li> <li className="o">{detailProduct.o2007}</li> <li className="o">{detailProduct.o2008}</li> <li className="o">{detailProduct.o2009}</li> <li className="o">{detailProduct.o2010}</li>
<li className="ques1">{detailProduct.mcq403}</li> <li className="o">{detailProduct.o2011}</li> <li className="o">{detailProduct.o2012}</li> <li className="o">{detailProduct.o2013}</li> <li className="o">{detailProduct.o2014}</li> <li className="o">{detailProduct.o2015}</li>
<li className="ques1">{detailProduct.mcq404}</li> <li className="o">{detailProduct.o2016}</li> <li className="o">{detailProduct.o2017}</li> <li className="o">{detailProduct.o2018}</li> <li className="o">{detailProduct.o2019}</li> <li className="o">{detailProduct.o2020}</li>
<li className="ques1">{detailProduct.mcq405}</li> <li className="o">{detailProduct.o2021}</li> <li className="o">{detailProduct.o2022}</li> <li className="o">{detailProduct.o2023}</li> <li className="o">{detailProduct.o2024}</li> <li className="o">{detailProduct.o2025}</li>
<li className="ques1">{detailProduct.mcq406}</li> <li className="o">{detailProduct.o2026}</li> <li className="o">{detailProduct.o2027}</li> <li className="o">{detailProduct.o2028}</li> <li className="o">{detailProduct.o2029}</li> <li className="o">{detailProduct.o2030}</li>
<li className="ques1">{detailProduct.mcq407}</li> <li className="o">{detailProduct.o2031}</li> <li className="o">{detailProduct.o2032}</li> <li className="o">{detailProduct.o2033}</li> <li className="o">{detailProduct.o2034}</li> <li className="o">{detailProduct.o2035}</li>
<li className="ques1">{detailProduct.mcq408}</li> <li className="o">{detailProduct.o2036}</li> <li className="o">{detailProduct.o2037}</li> <li className="o">{detailProduct.o2038}</li> <li className="o">{detailProduct.o2039}</li> <li className="o">{detailProduct.o2040}</li>
<li className="ques1">{detailProduct.mcq409}</li> <li className="o">{detailProduct.o2041}</li> <li className="o">{detailProduct.o2042}</li> <li className="o">{detailProduct.o2043}</li> <li className="o">{detailProduct.o2044}</li> <li className="o">{detailProduct.o2045}</li>
<li className="ques1">{detailProduct.mcq410}</li> <li className="o">{detailProduct.o2046}</li> <li className="o">{detailProduct.o2047}</li> <li className="o">{detailProduct.o2048}</li> <li className="o">{detailProduct.o2049}</li> <li className="o">{detailProduct.o2050}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="F-B" /><label className="topics" for="F-B">🔻{detailProduct.t42}</label>
<ul>
<li className="ques1">{detailProduct.mcq411}</li> <li className="o">{detailProduct.o2051}</li> <li className="o">{detailProduct.o2052}</li> <li className="o">{detailProduct.o2053}</li> <li className="o">{detailProduct.o2054}</li> <li className="o">{detailProduct.o2055}</li>
<li className="ques1">{detailProduct.mcq412}</li> <li className="o">{detailProduct.o2056}</li> <li className="o">{detailProduct.o2057}</li> <li className="o">{detailProduct.o2058}</li> <li className="o">{detailProduct.o2059}</li> <li className="o">{detailProduct.o2060}</li>
<li className="ques1">{detailProduct.mcq413}</li> <li className="o">{detailProduct.o2061}</li> <li className="o">{detailProduct.o2062}</li> <li className="o">{detailProduct.o2063}</li> <li className="o">{detailProduct.o2064}</li> <li className="o">{detailProduct.o2065}</li>
<li className="ques1">{detailProduct.mcq414}</li> <li className="o">{detailProduct.o2066}</li> <li className="o">{detailProduct.o2067}</li> <li className="o">{detailProduct.o2068}</li> <li className="o">{detailProduct.o2069}</li> <li className="o">{detailProduct.o2070}</li>
<li className="ques1">{detailProduct.mcq415}</li> <li className="o">{detailProduct.o2071}</li> <li className="o">{detailProduct.o2072}</li> <li className="o">{detailProduct.o2073}</li> <li className="o">{detailProduct.o2074}</li> <li className="o">{detailProduct.o2075}</li>
<li className="ques1">{detailProduct.mcq416}</li> <li className="o">{detailProduct.o2076}</li> <li className="o">{detailProduct.o2077}</li> <li className="o">{detailProduct.o2078}</li> <li className="o">{detailProduct.o2079}</li> <li className="o">{detailProduct.o2080}</li>
<li className="ques1">{detailProduct.mcq417}</li> <li className="o">{detailProduct.o2081}</li> <li className="o">{detailProduct.o2082}</li> <li className="o">{detailProduct.o2083}</li> <li className="o">{detailProduct.o2084}</li> <li className="o">{detailProduct.o2085}</li>
<li className="ques1">{detailProduct.mcq418}</li> <li className="o">{detailProduct.o2086}</li> <li className="o">{detailProduct.o2087}</li> <li className="o">{detailProduct.o2088}</li> <li className="o">{detailProduct.o2089}</li> <li className="o">{detailProduct.o2090}</li>
<li className="ques1">{detailProduct.mcq419}</li> <li className="o">{detailProduct.o2091}</li> <li className="o">{detailProduct.o2092}</li> <li className="o">{detailProduct.o2093}</li> <li className="o">{detailProduct.o2094}</li> <li className="o">{detailProduct.o2095}</li>
<li className="ques1">{detailProduct.mcq420}</li> <li className="o">{detailProduct.o2096}</li> <li className="o">{detailProduct.o2097}</li> <li className="o">{detailProduct.o2098}</li> <li className="o">{detailProduct.o2099}</li> <li className="o">{detailProduct.o2100}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="F-C" /><label className="topics" for="F-C">🔻{detailProduct.t43}</label>
<ul>
<li className="ques1">{detailProduct.mcq421}</li> <li className="o">{detailProduct.o2101}</li> <li className="o">{detailProduct.o2102}</li> <li className="o">{detailProduct.o2103}</li> <li className="o">{detailProduct.o2104}</li> <li className="o">{detailProduct.o2105}</li>
<li className="ques1">{detailProduct.mcq422}</li> <li className="o">{detailProduct.o2106}</li> <li className="o">{detailProduct.o2107}</li> <li className="o">{detailProduct.o2108}</li> <li className="o">{detailProduct.o2109}</li> <li className="o">{detailProduct.o2110}</li>
<li className="ques1">{detailProduct.mcq423}</li> <li className="o">{detailProduct.o2111}</li> <li className="o">{detailProduct.o2112}</li> <li className="o">{detailProduct.o2113}</li> <li className="o">{detailProduct.o2114}</li> <li className="o">{detailProduct.o2115}</li>
<li className="ques1">{detailProduct.mcq424}</li> <li className="o">{detailProduct.o2116}</li> <li className="o">{detailProduct.o2117}</li> <li className="o">{detailProduct.o2118}</li> <li className="o">{detailProduct.o2119}</li> <li className="o">{detailProduct.o2120}</li>
<li className="ques1">{detailProduct.mcq425}</li> <li className="o">{detailProduct.o2121}</li> <li className="o">{detailProduct.o2122}</li> <li className="o">{detailProduct.o2123}</li> <li className="o">{detailProduct.o2124}</li> <li className="o">{detailProduct.o2125}</li>
<li className="ques1">{detailProduct.mcq426}</li> <li className="o">{detailProduct.o2126}</li> <li className="o">{detailProduct.o2127}</li> <li className="o">{detailProduct.o2128}</li> <li className="o">{detailProduct.o2129}</li> <li className="o">{detailProduct.o2130}</li>
<li className="ques1">{detailProduct.mcq427}</li> <li className="o">{detailProduct.o2131}</li> <li className="o">{detailProduct.o2132}</li> <li className="o">{detailProduct.o2133}</li> <li className="o">{detailProduct.o2134}</li> <li className="o">{detailProduct.o2135}</li>
<li className="ques1">{detailProduct.mcq428}</li> <li className="o">{detailProduct.o2136}</li> <li className="o">{detailProduct.o2137}</li> <li className="o">{detailProduct.o2138}</li> <li className="o">{detailProduct.o2139}</li> <li className="o">{detailProduct.o2140}</li>
<li className="ques1">{detailProduct.mcq429}</li> <li className="o">{detailProduct.o2141}</li> <li className="o">{detailProduct.o2142}</li> <li className="o">{detailProduct.o2143}</li> <li className="o">{detailProduct.o2144}</li> <li className="o">{detailProduct.o2145}</li>
<li className="ques1">{detailProduct.mcq430}</li> <li className="o">{detailProduct.o2146}</li> <li className="o">{detailProduct.o2147}</li> <li className="o">{detailProduct.o2148}</li> <li className="o">{detailProduct.o2149}</li> <li className="o">{detailProduct.o2150}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="F-D" /><label className="topics" for="F-D">🔻{detailProduct.t44}</label>
<ul>
<li className="ques1">{detailProduct.mcq431}</li> <li className="o">{detailProduct.o2151}</li> <li className="o">{detailProduct.o2152}</li> <li className="o">{detailProduct.o2153}</li> <li className="o">{detailProduct.o2154}</li> <li className="o">{detailProduct.o2155}</li>
<li className="ques1">{detailProduct.mcq432}</li> <li className="o">{detailProduct.o2156}</li> <li className="o">{detailProduct.o2157}</li> <li className="o">{detailProduct.o2158}</li> <li className="o">{detailProduct.o2159}</li> <li className="o">{detailProduct.o2160}</li>
<li className="ques1">{detailProduct.mcq433}</li> <li className="o">{detailProduct.o2161}</li> <li className="o">{detailProduct.o2162}</li> <li className="o">{detailProduct.o2163}</li> <li className="o">{detailProduct.o2164}</li> <li className="o">{detailProduct.o2165}</li>
<li className="ques1">{detailProduct.mcq434}</li> <li className="o">{detailProduct.o2166}</li> <li className="o">{detailProduct.o2167}</li> <li className="o">{detailProduct.o2168}</li> <li className="o">{detailProduct.o2169}</li> <li className="o">{detailProduct.o2170}</li>
<li className="ques1">{detailProduct.mcq435}</li> <li className="o">{detailProduct.o2171}</li> <li className="o">{detailProduct.o2172}</li> <li className="o">{detailProduct.o2173}</li> <li className="o">{detailProduct.o2174}</li> <li className="o">{detailProduct.o2175}</li>
<li className="ques1">{detailProduct.mcq436}</li> <li className="o">{detailProduct.o2176}</li> <li className="o">{detailProduct.o2177}</li> <li className="o">{detailProduct.o2178}</li> <li className="o">{detailProduct.o2179}</li> <li className="o">{detailProduct.o2180}</li>
<li className="ques1">{detailProduct.mcq437}</li> <li className="o">{detailProduct.o2181}</li> <li className="o">{detailProduct.o2182}</li> <li className="o">{detailProduct.o2183}</li> <li className="o">{detailProduct.o2184}</li> <li className="o">{detailProduct.o2185}</li>
<li className="ques1">{detailProduct.mcq438}</li> <li className="o">{detailProduct.o2186}</li> <li className="o">{detailProduct.o2187}</li> <li className="o">{detailProduct.o2188}</li> <li className="o">{detailProduct.o2189}</li> <li className="o">{detailProduct.o2190}</li>
<li className="ques1">{detailProduct.mcq439}</li> <li className="o">{detailProduct.o2191}</li> <li className="o">{detailProduct.o2192}</li> <li className="o">{detailProduct.o2193}</li> <li className="o">{detailProduct.o2194}</li> <li className="o">{detailProduct.o2195}</li>
<li className="ques1">{detailProduct.mcq440}</li> <li className="o">{detailProduct.o2196}</li> <li className="o">{detailProduct.o2197}</li> <li className="o">{detailProduct.o2198}</li> <li className="o">{detailProduct.o2199}</li> <li className="o">{detailProduct.o2200}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="F-E" /><label className="topics" for="F-E">🔻{detailProduct.t45}</label>
<ul>
<li className="ques1">{detailProduct.mcq441}</li> <li className="o">{detailProduct.o2201}</li> <li className="o">{detailProduct.o2202}</li> <li className="o">{detailProduct.o2203}</li> <li className="o">{detailProduct.o2204}</li> <li className="o">{detailProduct.o2205}</li>
<li className="ques1">{detailProduct.mcq442}</li> <li className="o">{detailProduct.o2206}</li> <li className="o">{detailProduct.o2207}</li> <li className="o">{detailProduct.o2208}</li> <li className="o">{detailProduct.o2209}</li> <li className="o">{detailProduct.o2210}</li>
<li className="ques1">{detailProduct.mcq443}</li> <li className="o">{detailProduct.o2211}</li> <li className="o">{detailProduct.o2212}</li> <li className="o">{detailProduct.o2213}</li> <li className="o">{detailProduct.o2214}</li> <li className="o">{detailProduct.o2215}</li>
<li className="ques1">{detailProduct.mcq444}</li> <li className="o">{detailProduct.o2216}</li> <li className="o">{detailProduct.o2217}</li> <li className="o">{detailProduct.o2218}</li> <li className="o">{detailProduct.o2219}</li> <li className="o">{detailProduct.o2220}</li>
<li className="ques1">{detailProduct.mcq445}</li> <li className="o">{detailProduct.o2221}</li> <li className="o">{detailProduct.o2222}</li> <li className="o">{detailProduct.o2223}</li> <li className="o">{detailProduct.o2224}</li> <li className="o">{detailProduct.o2225}</li>
<li className="ques1">{detailProduct.mcq446}</li> <li className="o">{detailProduct.o2226}</li> <li className="o">{detailProduct.o2227}</li> <li className="o">{detailProduct.o2228}</li> <li className="o">{detailProduct.o2229}</li> <li className="o">{detailProduct.o2230}</li>
<li className="ques1">{detailProduct.mcq447}</li> <li className="o">{detailProduct.o2231}</li> <li className="o">{detailProduct.o2232}</li> <li className="o">{detailProduct.o2233}</li> <li className="o">{detailProduct.o2234}</li> <li className="o">{detailProduct.o2235}</li>
<li className="ques1">{detailProduct.mcq448}</li> <li className="o">{detailProduct.o2236}</li> <li className="o">{detailProduct.o2237}</li> <li className="o">{detailProduct.o2238}</li> <li className="o">{detailProduct.o2239}</li> <li className="o">{detailProduct.o2240}</li>
<li className="ques1">{detailProduct.mcq449}</li> <li className="o">{detailProduct.o2241}</li> <li className="o">{detailProduct.o2242}</li> <li className="o">{detailProduct.o2243}</li> <li className="o">{detailProduct.o2244}</li> <li className="o">{detailProduct.o2245}</li>
<li className="ques1">{detailProduct.mcq450}</li> <li className="o">{detailProduct.o2246}</li> <li className="o">{detailProduct.o2247}</li> <li className="o">{detailProduct.o2248}</li> <li className="o">{detailProduct.o2249}</li> <li className="o">{detailProduct.o2250}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="F-F" /><label className="topics" for="F-F">🔻{detailProduct.t46}</label>
<ul>
<li className="ques1">{detailProduct.mcq451}</li> <li className="o">{detailProduct.o2251}</li> <li className="o">{detailProduct.o2252}</li> <li className="o">{detailProduct.o2253}</li> <li className="o">{detailProduct.o2254}</li> <li className="o">{detailProduct.o2255}</li>
<li className="ques1">{detailProduct.mcq452}</li> <li className="o">{detailProduct.o2256}</li> <li className="o">{detailProduct.o2257}</li> <li className="o">{detailProduct.o2258}</li> <li className="o">{detailProduct.o2259}</li> <li className="o">{detailProduct.o2260}</li>
<li className="ques1">{detailProduct.mcq453}</li> <li className="o">{detailProduct.o2261}</li> <li className="o">{detailProduct.o2262}</li> <li className="o">{detailProduct.o2263}</li> <li className="o">{detailProduct.o2264}</li> <li className="o">{detailProduct.o2265}</li>
<li className="ques1">{detailProduct.mcq454}</li> <li className="o">{detailProduct.o2266}</li> <li className="o">{detailProduct.o2267}</li> <li className="o">{detailProduct.o2268}</li> <li className="o">{detailProduct.o2269}</li> <li className="o">{detailProduct.o2270}</li>
<li className="ques1">{detailProduct.mcq455}</li> <li className="o">{detailProduct.o2271}</li> <li className="o">{detailProduct.o2272}</li> <li className="o">{detailProduct.o2273}</li> <li className="o">{detailProduct.o2274}</li> <li className="o">{detailProduct.o2275}</li>
<li className="ques1">{detailProduct.mcq456}</li> <li className="o">{detailProduct.o2276}</li> <li className="o">{detailProduct.o2277}</li> <li className="o">{detailProduct.o2278}</li> <li className="o">{detailProduct.o2279}</li> <li className="o">{detailProduct.o2280}</li>
<li className="ques1">{detailProduct.mcq457}</li> <li className="o">{detailProduct.o2281}</li> <li className="o">{detailProduct.o2282}</li> <li className="o">{detailProduct.o2283}</li> <li className="o">{detailProduct.o2284}</li> <li className="o">{detailProduct.o2285}</li>
<li className="ques1">{detailProduct.mcq458}</li> <li className="o">{detailProduct.o2286}</li> <li className="o">{detailProduct.o2287}</li> <li className="o">{detailProduct.o2288}</li> <li className="o">{detailProduct.o2289}</li> <li className="o">{detailProduct.o2290}</li>
<li className="ques1">{detailProduct.mcq459}</li> <li className="o">{detailProduct.o2291}</li> <li className="o">{detailProduct.o2292}</li> <li className="o">{detailProduct.o2293}</li> <li className="o">{detailProduct.o2294}</li> <li className="o">{detailProduct.o2295}</li>
<li className="ques1">{detailProduct.mcq460}</li> <li className="o">{detailProduct.o2296}</li> <li className="o">{detailProduct.o2297}</li> <li className="o">{detailProduct.o2298}</li> <li className="o">{detailProduct.o2299}</li> <li className="o">{detailProduct.o2300}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="F-G" /><label className="topics" for="F-G">🔻{detailProduct.t47}</label>
<ul>
<li className="ques1">{detailProduct.mcq461}</li> <li className="o">{detailProduct.o2301}</li> <li className="o">{detailProduct.o2302}</li> <li className="o">{detailProduct.o2303}</li> <li className="o">{detailProduct.o2304}</li> <li className="o">{detailProduct.o2305}</li>
<li className="ques1">{detailProduct.mcq462}</li> <li className="o">{detailProduct.o2306}</li> <li className="o">{detailProduct.o2307}</li> <li className="o">{detailProduct.o2308}</li> <li className="o">{detailProduct.o2309}</li> <li className="o">{detailProduct.o2310}</li>
<li className="ques1">{detailProduct.mcq463}</li> <li className="o">{detailProduct.o2311}</li> <li className="o">{detailProduct.o2312}</li> <li className="o">{detailProduct.o2313}</li> <li className="o">{detailProduct.o2314}</li> <li className="o">{detailProduct.o2315}</li>
<li className="ques1">{detailProduct.mcq464}</li> <li className="o">{detailProduct.o2316}</li> <li className="o">{detailProduct.o2317}</li> <li className="o">{detailProduct.o2318}</li> <li className="o">{detailProduct.o2319}</li> <li className="o">{detailProduct.o2320}</li>
<li className="ques1">{detailProduct.mcq465}</li> <li className="o">{detailProduct.o2321}</li> <li className="o">{detailProduct.o2322}</li> <li className="o">{detailProduct.o2323}</li> <li className="o">{detailProduct.o2324}</li> <li className="o">{detailProduct.o2325}</li>
<li className="ques1">{detailProduct.mcq466}</li> <li className="o">{detailProduct.o2326}</li> <li className="o">{detailProduct.o2327}</li> <li className="o">{detailProduct.o2328}</li> <li className="o">{detailProduct.o2329}</li> <li className="o">{detailProduct.o2330}</li>
<li className="ques1">{detailProduct.mcq467}</li> <li className="o">{detailProduct.o2331}</li> <li className="o">{detailProduct.o2332}</li> <li className="o">{detailProduct.o2333}</li> <li className="o">{detailProduct.o2334}</li> <li className="o">{detailProduct.o2335}</li>
<li className="ques1">{detailProduct.mcq468}</li> <li className="o">{detailProduct.o2336}</li> <li className="o">{detailProduct.o2337}</li> <li className="o">{detailProduct.o2338}</li> <li className="o">{detailProduct.o2339}</li> <li className="o">{detailProduct.o2340}</li>
<li className="ques1">{detailProduct.mcq469}</li> <li className="o">{detailProduct.o2341}</li> <li className="o">{detailProduct.o2342}</li> <li className="o">{detailProduct.o2343}</li> <li className="o">{detailProduct.o2344}</li> <li className="o">{detailProduct.o2345}</li>
<li className="ques1">{detailProduct.mcq470}</li> <li className="o">{detailProduct.o2346}</li> <li className="o">{detailProduct.o2347}</li> <li className="o">{detailProduct.o2348}</li> <li className="o">{detailProduct.o2349}</li> <li className="o">{detailProduct.o2350}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="F-H" /><label className="topics" for="F-H">🔻{detailProduct.t48}</label>
<ul>
<li className="ques1">{detailProduct.mcq471}</li> <li className="o">{detailProduct.o2351}</li> <li className="o">{detailProduct.o2352}</li> <li className="o">{detailProduct.o2353}</li> <li className="o">{detailProduct.o2354}</li> <li className="o">{detailProduct.o2355}</li>
<li className="ques1">{detailProduct.mcq472}</li> <li className="o">{detailProduct.o2356}</li> <li className="o">{detailProduct.o2357}</li> <li className="o">{detailProduct.o2358}</li> <li className="o">{detailProduct.o2359}</li> <li className="o">{detailProduct.o2360}</li>
<li className="ques1">{detailProduct.mcq473}</li> <li className="o">{detailProduct.o2361}</li> <li className="o">{detailProduct.o2362}</li> <li className="o">{detailProduct.o2363}</li> <li className="o">{detailProduct.o2364}</li> <li className="o">{detailProduct.o2365}</li>
<li className="ques1">{detailProduct.mcq474}</li> <li className="o">{detailProduct.o2366}</li> <li className="o">{detailProduct.o2367}</li> <li className="o">{detailProduct.o2368}</li> <li className="o">{detailProduct.o2369}</li> <li className="o">{detailProduct.o2370}</li>
<li className="ques1">{detailProduct.mcq475}</li> <li className="o">{detailProduct.o2371}</li> <li className="o">{detailProduct.o2372}</li> <li className="o">{detailProduct.o2373}</li> <li className="o">{detailProduct.o2374}</li> <li className="o">{detailProduct.o2375}</li>
<li className="ques1">{detailProduct.mcq476}</li> <li className="o">{detailProduct.o2376}</li> <li className="o">{detailProduct.o2377}</li> <li className="o">{detailProduct.o2378}</li> <li className="o">{detailProduct.o2379}</li> <li className="o">{detailProduct.o2380}</li>
<li className="ques1">{detailProduct.mcq477}</li> <li className="o">{detailProduct.o2381}</li> <li className="o">{detailProduct.o2382}</li> <li className="o">{detailProduct.o2383}</li> <li className="o">{detailProduct.o2384}</li> <li className="o">{detailProduct.o2385}</li>
<li className="ques1">{detailProduct.mcq478}</li> <li className="o">{detailProduct.o2386}</li> <li className="o">{detailProduct.o2387}</li> <li className="o">{detailProduct.o2388}</li> <li className="o">{detailProduct.o2389}</li> <li className="o">{detailProduct.o2390}</li>
<li className="ques1">{detailProduct.mcq479}</li> <li className="o">{detailProduct.o2391}</li> <li className="o">{detailProduct.o2392}</li> <li className="o">{detailProduct.o2393}</li> <li className="o">{detailProduct.o2394}</li> <li className="o">{detailProduct.o2395}</li>
<li className="ques1">{detailProduct.mcq480}</li> <li className="o">{detailProduct.o2396}</li> <li className="o">{detailProduct.o2397}</li> <li className="o">{detailProduct.o2398}</li> <li className="o">{detailProduct.o2399}</li> <li className="o">{detailProduct.o2400}</li>
 </ul></div></li></ul>
     
     </div></div>

     <div className="multi-level"><div className="item"><input type="checkbox" id="G" /><label className="lesson" for="G">{detailProduct.c7}</label>
     <ul><li><div className="sub-item"><input type="checkbox" id="G-A" /><label className="topics" for="G-A">🔻{detailProduct.t49}</label>
<ul>
<li className="ques1">{detailProduct.mcq481}</li> <li className="o">{detailProduct.o2401}</li> <li className="o">{detailProduct.o2402}</li> <li className="o">{detailProduct.o2403}</li> <li className="o">{detailProduct.o2404}</li> <li className="o">{detailProduct.o2405}</li>
<li className="ques1">{detailProduct.mcq482}</li> <li className="o">{detailProduct.o2406}</li> <li className="o">{detailProduct.o2407}</li> <li className="o">{detailProduct.o2408}</li> <li className="o">{detailProduct.o2409}</li> <li className="o">{detailProduct.o2410}</li>
<li className="ques1">{detailProduct.mcq483}</li> <li className="o">{detailProduct.o2411}</li> <li className="o">{detailProduct.o2412}</li> <li className="o">{detailProduct.o2413}</li> <li className="o">{detailProduct.o2414}</li> <li className="o">{detailProduct.o2415}</li>
<li className="ques1">{detailProduct.mcq484}</li> <li className="o">{detailProduct.o2416}</li> <li className="o">{detailProduct.o2417}</li> <li className="o">{detailProduct.o2418}</li> <li className="o">{detailProduct.o2419}</li> <li className="o">{detailProduct.o2420}</li>
<li className="ques1">{detailProduct.mcq485}</li> <li className="o">{detailProduct.o2421}</li> <li className="o">{detailProduct.o2422}</li> <li className="o">{detailProduct.o2423}</li> <li className="o">{detailProduct.o2424}</li> <li className="o">{detailProduct.o2425}</li>
<li className="ques1">{detailProduct.mcq486}</li> <li className="o">{detailProduct.o2426}</li> <li className="o">{detailProduct.o2427}</li> <li className="o">{detailProduct.o2428}</li> <li className="o">{detailProduct.o2429}</li> <li className="o">{detailProduct.o2430}</li>
<li className="ques1">{detailProduct.mcq487}</li> <li className="o">{detailProduct.o2431}</li> <li className="o">{detailProduct.o2432}</li> <li className="o">{detailProduct.o2433}</li> <li className="o">{detailProduct.o2434}</li> <li className="o">{detailProduct.o2435}</li>
<li className="ques1">{detailProduct.mcq488}</li> <li className="o">{detailProduct.o2436}</li> <li className="o">{detailProduct.o2437}</li> <li className="o">{detailProduct.o2438}</li> <li className="o">{detailProduct.o2439}</li> <li className="o">{detailProduct.o2440}</li>
<li className="ques1">{detailProduct.mcq489}</li> <li className="o">{detailProduct.o2441}</li> <li className="o">{detailProduct.o2442}</li> <li className="o">{detailProduct.o2443}</li> <li className="o">{detailProduct.o2444}</li> <li className="o">{detailProduct.o2445}</li>
<li className="ques1">{detailProduct.mcq490}</li> <li className="o">{detailProduct.o2446}</li> <li className="o">{detailProduct.o2447}</li> <li className="o">{detailProduct.o2448}</li> <li className="o">{detailProduct.o2449}</li> <li className="o">{detailProduct.o2450}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="G-B" /><label className="topics" for="G-B">🔻{detailProduct.t50}</label>
<ul>
<li className="ques1">{detailProduct.mcq491}</li> <li className="o">{detailProduct.o2451}</li> <li className="o">{detailProduct.o2452}</li> <li className="o">{detailProduct.o2453}</li> <li className="o">{detailProduct.o2454}</li> <li className="o">{detailProduct.o2455}</li>
<li className="ques1">{detailProduct.mcq492}</li> <li className="o">{detailProduct.o2456}</li> <li className="o">{detailProduct.o2457}</li> <li className="o">{detailProduct.o2458}</li> <li className="o">{detailProduct.o2459}</li> <li className="o">{detailProduct.o2460}</li>
<li className="ques1">{detailProduct.mcq493}</li> <li className="o">{detailProduct.o2461}</li> <li className="o">{detailProduct.o2462}</li> <li className="o">{detailProduct.o2463}</li> <li className="o">{detailProduct.o2464}</li> <li className="o">{detailProduct.o2465}</li>
<li className="ques1">{detailProduct.mcq494}</li> <li className="o">{detailProduct.o2466}</li> <li className="o">{detailProduct.o2467}</li> <li className="o">{detailProduct.o2468}</li> <li className="o">{detailProduct.o2469}</li> <li className="o">{detailProduct.o2470}</li>
<li className="ques1">{detailProduct.mcq495}</li> <li className="o">{detailProduct.o2471}</li> <li className="o">{detailProduct.o2472}</li> <li className="o">{detailProduct.o2473}</li> <li className="o">{detailProduct.o2474}</li> <li className="o">{detailProduct.o2475}</li>
<li className="ques1">{detailProduct.mcq496}</li> <li className="o">{detailProduct.o2476}</li> <li className="o">{detailProduct.o2477}</li> <li className="o">{detailProduct.o2478}</li> <li className="o">{detailProduct.o2479}</li> <li className="o">{detailProduct.o2480}</li>
<li className="ques1">{detailProduct.mcq497}</li> <li className="o">{detailProduct.o2481}</li> <li className="o">{detailProduct.o2482}</li> <li className="o">{detailProduct.o2483}</li> <li className="o">{detailProduct.o2484}</li> <li className="o">{detailProduct.o2485}</li>
<li className="ques1">{detailProduct.mcq498}</li> <li className="o">{detailProduct.o2486}</li> <li className="o">{detailProduct.o2487}</li> <li className="o">{detailProduct.o2488}</li> <li className="o">{detailProduct.o2489}</li> <li className="o">{detailProduct.o2490}</li>
<li className="ques1">{detailProduct.mcq499}</li> <li className="o">{detailProduct.o2491}</li> <li className="o">{detailProduct.o2492}</li> <li className="o">{detailProduct.o2493}</li> <li className="o">{detailProduct.o2494}</li> <li className="o">{detailProduct.o2495}</li>
<li className="ques1">{detailProduct.mcq500}</li> <li className="o">{detailProduct.o2496}</li> <li className="o">{detailProduct.o2497}</li> <li className="o">{detailProduct.o2498}</li> <li className="o">{detailProduct.o2499}</li> <li className="o">{detailProduct.o2500}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="G-C" /><label className="topics" for="G-C">🔻{detailProduct.t51}</label>
<ul>
<li className="ques1">{detailProduct.mcq501}</li> <li className="o">{detailProduct.o2501}</li> <li className="o">{detailProduct.o2502}</li> <li className="o">{detailProduct.o2503}</li> <li className="o">{detailProduct.o2504}</li> <li className="o">{detailProduct.o2505}</li>
<li className="ques1">{detailProduct.mcq502}</li> <li className="o">{detailProduct.o2506}</li> <li className="o">{detailProduct.o2507}</li> <li className="o">{detailProduct.o2508}</li> <li className="o">{detailProduct.o2509}</li> <li className="o">{detailProduct.o2510}</li>
<li className="ques1">{detailProduct.mcq503}</li> <li className="o">{detailProduct.o2511}</li> <li className="o">{detailProduct.o2512}</li> <li className="o">{detailProduct.o2513}</li> <li className="o">{detailProduct.o2514}</li> <li className="o">{detailProduct.o2515}</li>
<li className="ques1">{detailProduct.mcq504}</li> <li className="o">{detailProduct.o2516}</li> <li className="o">{detailProduct.o2517}</li> <li className="o">{detailProduct.o2518}</li> <li className="o">{detailProduct.o2519}</li> <li className="o">{detailProduct.o2520}</li>
<li className="ques1">{detailProduct.mcq505}</li> <li className="o">{detailProduct.o2521}</li> <li className="o">{detailProduct.o2522}</li> <li className="o">{detailProduct.o2523}</li> <li className="o">{detailProduct.o2524}</li> <li className="o">{detailProduct.o2525}</li>
<li className="ques1">{detailProduct.mcq506}</li> <li className="o">{detailProduct.o2526}</li> <li className="o">{detailProduct.o2527}</li> <li className="o">{detailProduct.o2528}</li> <li className="o">{detailProduct.o2529}</li> <li className="o">{detailProduct.o2530}</li>
<li className="ques1">{detailProduct.mcq507}</li> <li className="o">{detailProduct.o2531}</li> <li className="o">{detailProduct.o2532}</li> <li className="o">{detailProduct.o2533}</li> <li className="o">{detailProduct.o2534}</li> <li className="o">{detailProduct.o2535}</li>
<li className="ques1">{detailProduct.mcq508}</li> <li className="o">{detailProduct.o2536}</li> <li className="o">{detailProduct.o2537}</li> <li className="o">{detailProduct.o2538}</li> <li className="o">{detailProduct.o2539}</li> <li className="o">{detailProduct.o2540}</li>
<li className="ques1">{detailProduct.mcq509}</li> <li className="o">{detailProduct.o2541}</li> <li className="o">{detailProduct.o2542}</li> <li className="o">{detailProduct.o2543}</li> <li className="o">{detailProduct.o2544}</li> <li className="o">{detailProduct.o2545}</li>
<li className="ques1">{detailProduct.mcq510}</li> <li className="o">{detailProduct.o2546}</li> <li className="o">{detailProduct.o2547}</li> <li className="o">{detailProduct.o2548}</li> <li className="o">{detailProduct.o2549}</li> <li className="o">{detailProduct.o2550}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="G-D" /><label className="topics" for="G-D">🔻{detailProduct.t52}</label>
<ul>
<li className="ques1">{detailProduct.mcq511}</li> <li className="o">{detailProduct.o2551}</li> <li className="o">{detailProduct.o2552}</li> <li className="o">{detailProduct.o2553}</li> <li className="o">{detailProduct.o2554}</li> <li className="o">{detailProduct.o2555}</li>
<li className="ques1">{detailProduct.mcq512}</li> <li className="o">{detailProduct.o2556}</li> <li className="o">{detailProduct.o2557}</li> <li className="o">{detailProduct.o2558}</li> <li className="o">{detailProduct.o2559}</li> <li className="o">{detailProduct.o2560}</li>
<li className="ques1">{detailProduct.mcq513}</li> <li className="o">{detailProduct.o2561}</li> <li className="o">{detailProduct.o2562}</li> <li className="o">{detailProduct.o2563}</li> <li className="o">{detailProduct.o2564}</li> <li className="o">{detailProduct.o2565}</li>
<li className="ques1">{detailProduct.mcq514}</li> <li className="o">{detailProduct.o2566}</li> <li className="o">{detailProduct.o2567}</li> <li className="o">{detailProduct.o2568}</li> <li className="o">{detailProduct.o2569}</li> <li className="o">{detailProduct.o2570}</li>
<li className="ques1">{detailProduct.mcq515}</li> <li className="o">{detailProduct.o2571}</li> <li className="o">{detailProduct.o2572}</li> <li className="o">{detailProduct.o2573}</li> <li className="o">{detailProduct.o2574}</li> <li className="o">{detailProduct.o2575}</li>
<li className="ques1">{detailProduct.mcq516}</li> <li className="o">{detailProduct.o2576}</li> <li className="o">{detailProduct.o2577}</li> <li className="o">{detailProduct.o2578}</li> <li className="o">{detailProduct.o2579}</li> <li className="o">{detailProduct.o2580}</li>
<li className="ques1">{detailProduct.mcq517}</li> <li className="o">{detailProduct.o2581}</li> <li className="o">{detailProduct.o2582}</li> <li className="o">{detailProduct.o2583}</li> <li className="o">{detailProduct.o2584}</li> <li className="o">{detailProduct.o2585}</li>
<li className="ques1">{detailProduct.mcq518}</li> <li className="o">{detailProduct.o2586}</li> <li className="o">{detailProduct.o2587}</li> <li className="o">{detailProduct.o2588}</li> <li className="o">{detailProduct.o2589}</li> <li className="o">{detailProduct.o2590}</li>
<li className="ques1">{detailProduct.mcq519}</li> <li className="o">{detailProduct.o2591}</li> <li className="o">{detailProduct.o2592}</li> <li className="o">{detailProduct.o2593}</li> <li className="o">{detailProduct.o2594}</li> <li className="o">{detailProduct.o2595}</li>
<li className="ques1">{detailProduct.mcq520}</li> <li className="o">{detailProduct.o2596}</li> <li className="o">{detailProduct.o2597}</li> <li className="o">{detailProduct.o2598}</li> <li className="o">{detailProduct.o2599}</li> <li className="o">{detailProduct.o2600}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="G-E" /><label className="topics" for="G-E">🔻{detailProduct.t53}</label>
<ul>
<li className="ques1">{detailProduct.mcq521}</li> <li className="o">{detailProduct.o2601}</li> <li className="o">{detailProduct.o2602}</li> <li className="o">{detailProduct.o2603}</li> <li className="o">{detailProduct.o2604}</li> <li className="o">{detailProduct.o2605}</li>
<li className="ques1">{detailProduct.mcq522}</li> <li className="o">{detailProduct.o2606}</li> <li className="o">{detailProduct.o2607}</li> <li className="o">{detailProduct.o2608}</li> <li className="o">{detailProduct.o2609}</li> <li className="o">{detailProduct.o2610}</li>
<li className="ques1">{detailProduct.mcq523}</li> <li className="o">{detailProduct.o2611}</li> <li className="o">{detailProduct.o2612}</li> <li className="o">{detailProduct.o2613}</li> <li className="o">{detailProduct.o2614}</li> <li className="o">{detailProduct.o2615}</li>
<li className="ques1">{detailProduct.mcq524}</li> <li className="o">{detailProduct.o2616}</li> <li className="o">{detailProduct.o2617}</li> <li className="o">{detailProduct.o2618}</li> <li className="o">{detailProduct.o2619}</li> <li className="o">{detailProduct.o2620}</li>
<li className="ques1">{detailProduct.mcq525}</li> <li className="o">{detailProduct.o2621}</li> <li className="o">{detailProduct.o2622}</li> <li className="o">{detailProduct.o2623}</li> <li className="o">{detailProduct.o2624}</li> <li className="o">{detailProduct.o2625}</li>
<li className="ques1">{detailProduct.mcq526}</li> <li className="o">{detailProduct.o2626}</li> <li className="o">{detailProduct.o2627}</li> <li className="o">{detailProduct.o2628}</li> <li className="o">{detailProduct.o2629}</li> <li className="o">{detailProduct.o2630}</li>
<li className="ques1">{detailProduct.mcq527}</li> <li className="o">{detailProduct.o2631}</li> <li className="o">{detailProduct.o2632}</li> <li className="o">{detailProduct.o2633}</li> <li className="o">{detailProduct.o2634}</li> <li className="o">{detailProduct.o2635}</li>
<li className="ques1">{detailProduct.mcq528}</li> <li className="o">{detailProduct.o2636}</li> <li className="o">{detailProduct.o2637}</li> <li className="o">{detailProduct.o2638}</li> <li className="o">{detailProduct.o2639}</li> <li className="o">{detailProduct.o2640}</li>
<li className="ques1">{detailProduct.mcq529}</li> <li className="o">{detailProduct.o2641}</li> <li className="o">{detailProduct.o2642}</li> <li className="o">{detailProduct.o2643}</li> <li className="o">{detailProduct.o2644}</li> <li className="o">{detailProduct.o2645}</li>
<li className="ques1">{detailProduct.mcq530}</li> <li className="o">{detailProduct.o2646}</li> <li className="o">{detailProduct.o2647}</li> <li className="o">{detailProduct.o2648}</li> <li className="o">{detailProduct.o2649}</li> <li className="o">{detailProduct.o2650}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="G-F" /><label className="topics" for="G-F">🔻{detailProduct.t54}</label>
<ul>
<li className="ques1">{detailProduct.mcq531}</li> <li className="o">{detailProduct.o2651}</li> <li className="o">{detailProduct.o2652}</li> <li className="o">{detailProduct.o2653}</li> <li className="o">{detailProduct.o2654}</li> <li className="o">{detailProduct.o2655}</li>
<li className="ques1">{detailProduct.mcq532}</li> <li className="o">{detailProduct.o2656}</li> <li className="o">{detailProduct.o2657}</li> <li className="o">{detailProduct.o2658}</li> <li className="o">{detailProduct.o2659}</li> <li className="o">{detailProduct.o2660}</li>
<li className="ques1">{detailProduct.mcq533}</li> <li className="o">{detailProduct.o2661}</li> <li className="o">{detailProduct.o2662}</li> <li className="o">{detailProduct.o2663}</li> <li className="o">{detailProduct.o2664}</li> <li className="o">{detailProduct.o2665}</li>
<li className="ques1">{detailProduct.mcq534}</li> <li className="o">{detailProduct.o2666}</li> <li className="o">{detailProduct.o2667}</li> <li className="o">{detailProduct.o2668}</li> <li className="o">{detailProduct.o2669}</li> <li className="o">{detailProduct.o2670}</li>
<li className="ques1">{detailProduct.mcq535}</li> <li className="o">{detailProduct.o2671}</li> <li className="o">{detailProduct.o2672}</li> <li className="o">{detailProduct.o2673}</li> <li className="o">{detailProduct.o2674}</li> <li className="o">{detailProduct.o2675}</li>
<li className="ques1">{detailProduct.mcq536}</li> <li className="o">{detailProduct.o2676}</li> <li className="o">{detailProduct.o2677}</li> <li className="o">{detailProduct.o2678}</li> <li className="o">{detailProduct.o2679}</li> <li className="o">{detailProduct.o2680}</li>
<li className="ques1">{detailProduct.mcq537}</li> <li className="o">{detailProduct.o2681}</li> <li className="o">{detailProduct.o2682}</li> <li className="o">{detailProduct.o2683}</li> <li className="o">{detailProduct.o2684}</li> <li className="o">{detailProduct.o2685}</li>
<li className="ques1">{detailProduct.mcq538}</li> <li className="o">{detailProduct.o2686}</li> <li className="o">{detailProduct.o2687}</li> <li className="o">{detailProduct.o2688}</li> <li className="o">{detailProduct.o2689}</li> <li className="o">{detailProduct.o2690}</li>
<li className="ques1">{detailProduct.mcq539}</li> <li className="o">{detailProduct.o2691}</li> <li className="o">{detailProduct.o2692}</li> <li className="o">{detailProduct.o2693}</li> <li className="o">{detailProduct.o2694}</li> <li className="o">{detailProduct.o2695}</li>
<li className="ques1">{detailProduct.mcq540}</li> <li className="o">{detailProduct.o2696}</li> <li className="o">{detailProduct.o2697}</li> <li className="o">{detailProduct.o2698}</li> <li className="o">{detailProduct.o2699}</li> <li className="o">{detailProduct.o2700}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="G-G" /><label className="topics" for="G-G">🔻{detailProduct.t55}</label>
<ul>
<li className="ques1">{detailProduct.mcq541}</li> <li className="o">{detailProduct.o2701}</li> <li className="o">{detailProduct.o2702}</li> <li className="o">{detailProduct.o2703}</li> <li className="o">{detailProduct.o2704}</li> <li className="o">{detailProduct.o2705}</li>
<li className="ques1">{detailProduct.mcq542}</li> <li className="o">{detailProduct.o2706}</li> <li className="o">{detailProduct.o2707}</li> <li className="o">{detailProduct.o2708}</li> <li className="o">{detailProduct.o2709}</li> <li className="o">{detailProduct.o2710}</li>
<li className="ques1">{detailProduct.mcq543}</li> <li className="o">{detailProduct.o2711}</li> <li className="o">{detailProduct.o2712}</li> <li className="o">{detailProduct.o2713}</li> <li className="o">{detailProduct.o2714}</li> <li className="o">{detailProduct.o2715}</li>
<li className="ques1">{detailProduct.mcq544}</li> <li className="o">{detailProduct.o2716}</li> <li className="o">{detailProduct.o2717}</li> <li className="o">{detailProduct.o2718}</li> <li className="o">{detailProduct.o2719}</li> <li className="o">{detailProduct.o2720}</li>
<li className="ques1">{detailProduct.mcq545}</li> <li className="o">{detailProduct.o2721}</li> <li className="o">{detailProduct.o2722}</li> <li className="o">{detailProduct.o2723}</li> <li className="o">{detailProduct.o2724}</li> <li className="o">{detailProduct.o2725}</li>
<li className="ques1">{detailProduct.mcq546}</li> <li className="o">{detailProduct.o2726}</li> <li className="o">{detailProduct.o2727}</li> <li className="o">{detailProduct.o2728}</li> <li className="o">{detailProduct.o2729}</li> <li className="o">{detailProduct.o2730}</li>
<li className="ques1">{detailProduct.mcq547}</li> <li className="o">{detailProduct.o2731}</li> <li className="o">{detailProduct.o2732}</li> <li className="o">{detailProduct.o2733}</li> <li className="o">{detailProduct.o2734}</li> <li className="o">{detailProduct.o2735}</li>
<li className="ques1">{detailProduct.mcq548}</li> <li className="o">{detailProduct.o2736}</li> <li className="o">{detailProduct.o2737}</li> <li className="o">{detailProduct.o2738}</li> <li className="o">{detailProduct.o2739}</li> <li className="o">{detailProduct.o2740}</li>
<li className="ques1">{detailProduct.mcq549}</li> <li className="o">{detailProduct.o2741}</li> <li className="o">{detailProduct.o2742}</li> <li className="o">{detailProduct.o2743}</li> <li className="o">{detailProduct.o2744}</li> <li className="o">{detailProduct.o2745}</li>
<li className="ques1">{detailProduct.mcq550}</li> <li className="o">{detailProduct.o2746}</li> <li className="o">{detailProduct.o2747}</li> <li className="o">{detailProduct.o2748}</li> <li className="o">{detailProduct.o2749}</li> <li className="o">{detailProduct.o2750}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="G-H" /><label className="topics" for="G-H">🔻{detailProduct.t56}</label>
<ul>
<li className="ques1">{detailProduct.mcq551}</li> <li className="o">{detailProduct.o2751}</li> <li className="o">{detailProduct.o2752}</li> <li className="o">{detailProduct.o2753}</li> <li className="o">{detailProduct.o2754}</li> <li className="o">{detailProduct.o2755}</li>
<li className="ques1">{detailProduct.mcq552}</li> <li className="o">{detailProduct.o2756}</li> <li className="o">{detailProduct.o2757}</li> <li className="o">{detailProduct.o2758}</li> <li className="o">{detailProduct.o2759}</li> <li className="o">{detailProduct.o2760}</li>
<li className="ques1">{detailProduct.mcq553}</li> <li className="o">{detailProduct.o2761}</li> <li className="o">{detailProduct.o2762}</li> <li className="o">{detailProduct.o2763}</li> <li className="o">{detailProduct.o2764}</li> <li className="o">{detailProduct.o2765}</li>
<li className="ques1">{detailProduct.mcq554}</li> <li className="o">{detailProduct.o2766}</li> <li className="o">{detailProduct.o2767}</li> <li className="o">{detailProduct.o2768}</li> <li className="o">{detailProduct.o2769}</li> <li className="o">{detailProduct.o2770}</li>
<li className="ques1">{detailProduct.mcq555}</li> <li className="o">{detailProduct.o2771}</li> <li className="o">{detailProduct.o2772}</li> <li className="o">{detailProduct.o2773}</li> <li className="o">{detailProduct.o2774}</li> <li className="o">{detailProduct.o2775}</li>
<li className="ques1">{detailProduct.mcq556}</li> <li className="o">{detailProduct.o2776}</li> <li className="o">{detailProduct.o2777}</li> <li className="o">{detailProduct.o2778}</li> <li className="o">{detailProduct.o2779}</li> <li className="o">{detailProduct.o2780}</li>
<li className="ques1">{detailProduct.mcq557}</li> <li className="o">{detailProduct.o2781}</li> <li className="o">{detailProduct.o2782}</li> <li className="o">{detailProduct.o2783}</li> <li className="o">{detailProduct.o2784}</li> <li className="o">{detailProduct.o2785}</li>
<li className="ques1">{detailProduct.mcq558}</li> <li className="o">{detailProduct.o2786}</li> <li className="o">{detailProduct.o2787}</li> <li className="o">{detailProduct.o2788}</li> <li className="o">{detailProduct.o2789}</li> <li className="o">{detailProduct.o2790}</li>
<li className="ques1">{detailProduct.mcq559}</li> <li className="o">{detailProduct.o2791}</li> <li className="o">{detailProduct.o2792}</li> <li className="o">{detailProduct.o2793}</li> <li className="o">{detailProduct.o2794}</li> <li className="o">{detailProduct.o2795}</li>
<li className="ques1">{detailProduct.mcq560}</li> <li className="o">{detailProduct.o2796}</li> <li className="o">{detailProduct.o2797}</li> <li className="o">{detailProduct.o2798}</li> <li className="o">{detailProduct.o2799}</li> <li className="o">{detailProduct.o2800}</li>
  </ul></div></li></ul>
     
     </div></div>

     <div className="multi-level"><div className="item"><input type="checkbox" id="H" /><label className="lesson" for="H">{detailProduct.c8}</label>
     <ul><li><div className="sub-item"><input type="checkbox" id="H-A" /><label className="topics" for="H-A">🔻{detailProduct.t57}</label>
<ul>
<li className="ques1">{detailProduct.mcq561}</li> <li className="o">{detailProduct.o2801}</li> <li className="o">⬇{detailProduct.o2802}</li> <li className="o">{detailProduct.o2803}</li> <li className="o">{detailProduct.o2804}</li> <li className="o">{detailProduct.o2805}</li>
<li className="ques1">{detailProduct.mcq562}</li> <li className="o">{detailProduct.o2806}</li> <li className="o">{detailProduct.o2807}</li> <li className="o">{detailProduct.o2808}</li> <li className="o">{detailProduct.o2809}</li> <li className="o">{detailProduct.o2810}</li>
<li className="ques1">{detailProduct.mcq563}</li> <li className="o">{detailProduct.o2811}</li> <li className="o">{detailProduct.o2812}</li> <li className="o">{detailProduct.o2813}</li> <li className="o">{detailProduct.o2814}</li> <li className="o">{detailProduct.o2815}</li>
<li className="ques1">{detailProduct.mcq564}</li> <li className="o">{detailProduct.o2816}</li> <li className="o">{detailProduct.o2817}</li> <li className="o">{detailProduct.o2818}</li> <li className="o">{detailProduct.o2819}</li> <li className="o">{detailProduct.o2820}</li>
<li className="ques1">{detailProduct.mcq565}</li> <li className="o">{detailProduct.o2821}</li> <li className="o">{detailProduct.o2822}</li> <li className="o">{detailProduct.o2823}</li> <li className="o">{detailProduct.o2824}</li> <li className="o">{detailProduct.o2825}</li>
<li className="ques1">{detailProduct.mcq566}</li> <li className="o">{detailProduct.o2826}</li> <li className="o">{detailProduct.o2827}</li> <li className="o">{detailProduct.o2828}</li> <li className="o">{detailProduct.o2829}</li> <li className="o">{detailProduct.o2830}</li>
<li className="ques1">{detailProduct.mcq567}</li> <li className="o">{detailProduct.o2831}</li> <li className="o">{detailProduct.o2832}</li> <li className="o">{detailProduct.o2833}</li> <li className="o">{detailProduct.o2834}</li> <li className="o">{detailProduct.o2835}</li>
<li className="ques1">{detailProduct.mcq568}</li> <li className="o">{detailProduct.o2836}</li> <li className="o">{detailProduct.o2837}</li> <li className="o">{detailProduct.o2838}</li> <li className="o">{detailProduct.o2839}</li> <li className="o">{detailProduct.o2840}</li>
<li className="ques1">{detailProduct.mcq569}</li> <li className="o">{detailProduct.o2841}</li> <li className="o">{detailProduct.o2842}</li> <li className="o">{detailProduct.o2843}</li> <li className="o">{detailProduct.o2844}</li> <li className="o">{detailProduct.o2845}</li>
<li className="ques1">{detailProduct.mcq570}</li> <li className="o">{detailProduct.o2846}</li> <li className="o">{detailProduct.o2847}</li> <li className="o">{detailProduct.o2848}</li> <li className="o">{detailProduct.o2849}</li> <li className="o">{detailProduct.o2850}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="H-B" /><label className="topics" for="H-B">🔻{detailProduct.t58}</label>
<ul>
<li className="ques1">{detailProduct.mcq571}</li> <li className="o">{detailProduct.o2851}</li> <li className="o">{detailProduct.o2852}</li> <li className="o">{detailProduct.o2853}</li> <li className="o">{detailProduct.o2854}</li> <li className="o">{detailProduct.o2855}</li>
<li className="ques1">{detailProduct.mcq572}</li> <li className="o">{detailProduct.o2856}</li> <li className="o">{detailProduct.o2857}</li> <li className="o">{detailProduct.o2858}</li> <li className="o">{detailProduct.o2859}</li> <li className="o">{detailProduct.o2860}</li>
<li className="ques1">{detailProduct.mcq573}</li> <li className="o">{detailProduct.o2861}</li> <li className="o">{detailProduct.o2862}</li> <li className="o">{detailProduct.o2863}</li> <li className="o">{detailProduct.o2864}</li> <li className="o">{detailProduct.o2865}</li>
<li className="ques1">{detailProduct.mcq574}</li> <li className="o">{detailProduct.o2866}</li> <li className="o">{detailProduct.o2867}</li> <li className="o">{detailProduct.o2868}</li> <li className="o">{detailProduct.o2869}</li> <li className="o">{detailProduct.o2870}</li>
<li className="ques1">{detailProduct.mcq575}</li> <li className="o">{detailProduct.o2871}</li> <li className="o">{detailProduct.o2872}</li> <li className="o">{detailProduct.o2873}</li> <li className="o">{detailProduct.o2874}</li> <li className="o">{detailProduct.o2875}</li>
<li className="ques1">{detailProduct.mcq576}</li> <li className="o">{detailProduct.o2876}</li> <li className="o">{detailProduct.o2877}</li> <li className="o">{detailProduct.o2878}</li> <li className="o">{detailProduct.o2879}</li> <li className="o">{detailProduct.o2880}</li>
<li className="ques1">{detailProduct.mcq577}</li> <li className="o">{detailProduct.o2881}</li> <li className="o">{detailProduct.o2882}</li> <li className="o">{detailProduct.o2883}</li> <li className="o">{detailProduct.o2884}</li> <li className="o">{detailProduct.o2885}</li>
<li className="ques1">{detailProduct.mcq578}</li> <li className="o">{detailProduct.o2886}</li> <li className="o">{detailProduct.o2887}</li> <li className="o">{detailProduct.o2888}</li> <li className="o">{detailProduct.o2889}</li> <li className="o">{detailProduct.o2890}</li>
<li className="ques1">{detailProduct.mcq579}</li> <li className="o">{detailProduct.o2891}</li> <li className="o">{detailProduct.o2892}</li> <li className="o">{detailProduct.o2893}</li> <li className="o">{detailProduct.o2894}</li> <li className="o">{detailProduct.o2895}</li>
<li className="ques1">{detailProduct.mcq580}</li> <li className="o">{detailProduct.o2896}</li> <li className="o">{detailProduct.o2897}</li> <li className="o">{detailProduct.o2898}</li> <li className="o">{detailProduct.o2899}</li> <li className="o">{detailProduct.o2900}</li>
  </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="H-C" /><label className="topics" for="H-C">🔻{detailProduct.t59}</label>
<ul>
<li className="ques1">{detailProduct.mcq581}</li> <li className="o">{detailProduct.o2901}</li> <li className="o">{detailProduct.o2902}</li> <li className="o">{detailProduct.o2903}</li> <li className="o">{detailProduct.o2904}</li> <li className="o">{detailProduct.o2905}</li>
<li className="ques1">{detailProduct.mcq582}</li> <li className="o">{detailProduct.o2906}</li> <li className="o">{detailProduct.o2907}</li> <li className="o">{detailProduct.o2908}</li> <li className="o">{detailProduct.o2909}</li> <li className="o">{detailProduct.o2910}</li>
<li className="ques1">{detailProduct.mcq583}</li> <li className="o">{detailProduct.o2911}</li> <li className="o">{detailProduct.o2912}</li> <li className="o">{detailProduct.o2913}</li> <li className="o">{detailProduct.o2914}</li> <li className="o">{detailProduct.o2915}</li>
<li className="ques1">{detailProduct.mcq584}</li> <li className="o">{detailProduct.o2916}</li> <li className="o">{detailProduct.o2917}</li> <li className="o">{detailProduct.o2918}</li> <li className="o">{detailProduct.o2919}</li> <li className="o">{detailProduct.o2920}</li>
<li className="ques1">{detailProduct.mcq585}</li> <li className="o">{detailProduct.o2921}</li> <li className="o">{detailProduct.o2922}</li> <li className="o">{detailProduct.o2923}</li> <li className="o">{detailProduct.o2924}</li> <li className="o">{detailProduct.o2925}</li>
<li className="ques1">{detailProduct.mcq586}</li> <li className="o">{detailProduct.o2926}</li> <li className="o">{detailProduct.o2927}</li> <li className="o">{detailProduct.o2928}</li> <li className="o">{detailProduct.o2929}</li> <li className="o">{detailProduct.o2930}</li>
<li className="ques1">{detailProduct.mcq587}</li> <li className="o">{detailProduct.o2931}</li> <li className="o">{detailProduct.o2932}</li> <li className="o">{detailProduct.o2933}</li> <li className="o">{detailProduct.o2934}</li> <li className="o">{detailProduct.o2935}</li>
<li className="ques1">{detailProduct.mcq588}</li> <li className="o">{detailProduct.o2936}</li> <li className="o">{detailProduct.o2937}</li> <li className="o">{detailProduct.o2938}</li> <li className="o">{detailProduct.o2939}</li> <li className="o">{detailProduct.o2940}</li>
<li className="ques1">{detailProduct.mcq589}</li> <li className="o">{detailProduct.o2941}</li> <li className="o">{detailProduct.o2942}</li> <li className="o">{detailProduct.o2943}</li> <li className="o">{detailProduct.o2944}</li> <li className="o">{detailProduct.o2945}</li>
<li className="ques1">{detailProduct.mcq590}</li> <li className="o">{detailProduct.o2946}</li> <li className="o">{detailProduct.o2947}</li> <li className="o">{detailProduct.o2948}</li> <li className="o">{detailProduct.o2949}</li> <li className="o">{detailProduct.o2950}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="H-D" /><label className="topics" for="H-D">🔻{detailProduct.t60}</label>
<ul>
<li className="ques1">{detailProduct.mcq591}</li> <li className="o">{detailProduct.o2951}</li> <li className="o">{detailProduct.o2952}</li> <li className="o">{detailProduct.o2953}</li> <li className="o">{detailProduct.o2954}</li> <li className="o">{detailProduct.o2955}</li>
<li className="ques1">{detailProduct.mcq592}</li> <li className="o">{detailProduct.o2956}</li> <li className="o">{detailProduct.o2957}</li> <li className="o">{detailProduct.o2958}</li> <li className="o">{detailProduct.o2959}</li> <li className="o">{detailProduct.o2960}</li>
<li className="ques1">{detailProduct.mcq593}</li> <li className="o">{detailProduct.o2961}</li> <li className="o">{detailProduct.o2962}</li> <li className="o">{detailProduct.o2963}</li> <li className="o">{detailProduct.o2964}</li> <li className="o">{detailProduct.o2965}</li>
<li className="ques1">{detailProduct.mcq594}</li> <li className="o">{detailProduct.o2966}</li> <li className="o">{detailProduct.o2967}</li> <li className="o">{detailProduct.o2968}</li> <li className="o">{detailProduct.o2969}</li> <li className="o">{detailProduct.o2970}</li>
<li className="ques1">{detailProduct.mcq595}</li> <li className="o">{detailProduct.o2971}</li> <li className="o">{detailProduct.o2972}</li> <li className="o">{detailProduct.o2973}</li> <li className="o">{detailProduct.o2974}</li> <li className="o">{detailProduct.o2975}</li>
<li className="ques1">{detailProduct.mcq596}</li> <li className="o">{detailProduct.o2976}</li> <li className="o">{detailProduct.o2977}</li> <li className="o">{detailProduct.o2978}</li> <li className="o">{detailProduct.o2979}</li> <li className="o">{detailProduct.o2980}</li>
<li className="ques1">{detailProduct.mcq597}</li> <li className="o">{detailProduct.o2981}</li> <li className="o">{detailProduct.o2982}</li> <li className="o">{detailProduct.o2983}</li> <li className="o">{detailProduct.o2984}</li> <li className="o">{detailProduct.o2985}</li>
<li className="ques1">{detailProduct.mcq598}</li> <li className="o">{detailProduct.o2986}</li> <li className="o">{detailProduct.o2987}</li> <li className="o">{detailProduct.o2988}</li> <li className="o">{detailProduct.o2989}</li> <li className="o">{detailProduct.o2990}</li>
<li className="ques1">{detailProduct.mcq599}</li> <li className="o">{detailProduct.o2991}</li> <li className="o">{detailProduct.o2992}</li> <li className="o">{detailProduct.o2993}</li> <li className="o">{detailProduct.o2994}</li> <li className="o">{detailProduct.o2995}</li>
<li className="ques1">{detailProduct.mcq600}</li> <li className="o">{detailProduct.o2996}</li> <li className="o">{detailProduct.o2997}</li> <li className="o">{detailProduct.o2998}</li> <li className="o">{detailProduct.o2999}</li> <li className="o">{detailProduct.o3000}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="H-E" /><label className="topics" for="H-E">🔻{detailProduct.t61}</label>
<ul>
<li className="ques1">{detailProduct.mcq601}</li> <li className="o">{detailProduct.o3001}</li> <li className="o">{detailProduct.o3002}</li> <li className="o">{detailProduct.o3003}</li> <li className="o">{detailProduct.o3004}</li> <li className="o">{detailProduct.o3005}</li>
<li className="ques1">{detailProduct.mcq602}</li> <li className="o">{detailProduct.o3006}</li> <li className="o">{detailProduct.o3007}</li> <li className="o">{detailProduct.o3008}</li> <li className="o">{detailProduct.o3009}</li> <li className="o">{detailProduct.o3010}</li>
<li className="ques1">{detailProduct.mcq603}</li> <li className="o">{detailProduct.o3011}</li> <li className="o">{detailProduct.o3012}</li> <li className="o">{detailProduct.o3013}</li> <li className="o">{detailProduct.o3014}</li> <li className="o">{detailProduct.o3015}</li>
<li className="ques1">{detailProduct.mcq604}</li> <li className="o">{detailProduct.o3016}</li> <li className="o">{detailProduct.o3017}</li> <li className="o">{detailProduct.o3018}</li> <li className="o">{detailProduct.o3019}</li> <li className="o">{detailProduct.o3020}</li>
<li className="ques1">{detailProduct.mcq605}</li> <li className="o">{detailProduct.o3021}</li> <li className="o">{detailProduct.o3022}</li> <li className="o">{detailProduct.o3023}</li> <li className="o">{detailProduct.o3024}</li> <li className="o">{detailProduct.o3025}</li>
<li className="ques1">{detailProduct.mcq606}</li> <li className="o">{detailProduct.o3026}</li> <li className="o">{detailProduct.o3027}</li> <li className="o">{detailProduct.o3028}</li> <li className="o">{detailProduct.o3029}</li> <li className="o">{detailProduct.o3030}</li>
<li className="ques1">{detailProduct.mcq607}</li> <li className="o">{detailProduct.o3031}</li> <li className="o">{detailProduct.o3032}</li> <li className="o">{detailProduct.o3033}</li> <li className="o">{detailProduct.o3034}</li> <li className="o">{detailProduct.o3035}</li>
<li className="ques1">{detailProduct.mcq608}</li> <li className="o">{detailProduct.o3036}</li> <li className="o">{detailProduct.o3037}</li> <li className="o">{detailProduct.o3038}</li> <li className="o">{detailProduct.o3039}</li> <li className="o">{detailProduct.o3040}</li>
<li className="ques1">{detailProduct.mcq609}</li> <li className="o">{detailProduct.o3041}</li> <li className="o">{detailProduct.o3042}</li> <li className="o">{detailProduct.o3043}</li> <li className="o">{detailProduct.o3044}</li> <li className="o">{detailProduct.o3045}</li>
<li className="ques1">{detailProduct.mcq610}</li> <li className="o">{detailProduct.o3046}</li> <li className="o">{detailProduct.o3047}</li> <li className="o">{detailProduct.o3048}</li> <li className="o">{detailProduct.o3049}</li> <li className="o">{detailProduct.o3050}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="H-F" /><label className="topics" for="H-F">🔻{detailProduct.t62}</label>
<ul>
<li className="ques1">{detailProduct.mcq611}</li> <li className="o">{detailProduct.o3051}</li> <li className="o">{detailProduct.o3052}</li> <li className="o">{detailProduct.o3053}</li> <li className="o">{detailProduct.o3054}</li> <li className="o">{detailProduct.o3055}</li>
<li className="ques1">{detailProduct.mcq612}</li> <li className="o">{detailProduct.o3056}</li> <li className="o">{detailProduct.o3057}</li> <li className="o">{detailProduct.o3058}</li> <li className="o">{detailProduct.o3059}</li> <li className="o">{detailProduct.o3060}</li>
<li className="ques1">{detailProduct.mcq613}</li> <li className="o">{detailProduct.o3061}</li> <li className="o">{detailProduct.o3062}</li> <li className="o">{detailProduct.o3063}</li> <li className="o">{detailProduct.o3064}</li> <li className="o">{detailProduct.o3065}</li>
<li className="ques1">{detailProduct.mcq614}</li> <li className="o">{detailProduct.o3066}</li> <li className="o">{detailProduct.o3067}</li> <li className="o">{detailProduct.o3068}</li> <li className="o">{detailProduct.o3069}</li> <li className="o">{detailProduct.o3070}</li>
<li className="ques1">{detailProduct.mcq615}</li> <li className="o">{detailProduct.o3071}</li> <li className="o">{detailProduct.o3072}</li> <li className="o">{detailProduct.o3073}</li> <li className="o">{detailProduct.o3074}</li> <li className="o">{detailProduct.o3075}</li>
<li className="ques1">{detailProduct.mcq616}</li> <li className="o">{detailProduct.o3076}</li> <li className="o">{detailProduct.o3077}</li> <li className="o">{detailProduct.o3078}</li> <li className="o">{detailProduct.o3079}</li> <li className="o">{detailProduct.o3080}</li>
<li className="ques1">{detailProduct.mcq617}</li> <li className="o">{detailProduct.o3081}</li> <li className="o">{detailProduct.o3082}</li> <li className="o">{detailProduct.o3083}</li> <li className="o">{detailProduct.o3084}</li> <li className="o">{detailProduct.o3085}</li>
<li className="ques1">{detailProduct.mcq618}</li> <li className="o">{detailProduct.o3086}</li> <li className="o">{detailProduct.o3087}</li> <li className="o">{detailProduct.o3088}</li> <li className="o">{detailProduct.o3089}</li> <li className="o">{detailProduct.o3090}</li>
<li className="ques1">{detailProduct.mcq619}</li> <li className="o">{detailProduct.o3091}</li> <li className="o">{detailProduct.o3092}</li> <li className="o">{detailProduct.o3093}</li> <li className="o">{detailProduct.o3094}</li> <li className="o">{detailProduct.o3095}</li>
<li className="ques1">{detailProduct.mcq620}</li> <li className="o">{detailProduct.o3096}</li> <li className="o">{detailProduct.o3097}</li> <li className="o">{detailProduct.o3098}</li> <li className="o">{detailProduct.o3099}</li> <li className="o">{detailProduct.o3100}</li>
  </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="H-G" /><label className="topics" for="H-G">🔻{detailProduct.t63}</label>
<ul>
<li className="ques1">{detailProduct.mcq621}</li> <li className="o">{detailProduct.o3101}</li> <li className="o">{detailProduct.o3102}</li> <li className="o">{detailProduct.o3103}</li> <li className="o">{detailProduct.o3104}</li> <li className="o">{detailProduct.o3105}</li>
<li className="ques1">{detailProduct.mcq622}</li> <li className="o">{detailProduct.o3106}</li> <li className="o">{detailProduct.o3107}</li> <li className="o">{detailProduct.o3108}</li> <li className="o">{detailProduct.o3109}</li> <li className="o">{detailProduct.o3110}</li>
<li className="ques1">{detailProduct.mcq623}</li> <li className="o">{detailProduct.o3111}</li> <li className="o">{detailProduct.o3112}</li> <li className="o">{detailProduct.o3113}</li> <li className="o">{detailProduct.o3114}</li> <li className="o">{detailProduct.o3115}</li>
<li className="ques1">{detailProduct.mcq624}</li> <li className="o">{detailProduct.o3116}</li> <li className="o">{detailProduct.o3117}</li> <li className="o">{detailProduct.o3118}</li> <li className="o">{detailProduct.o3119}</li> <li className="o">{detailProduct.o3120}</li>
<li className="ques1">{detailProduct.mcq625}</li> <li className="o">{detailProduct.o3121}</li> <li className="o">{detailProduct.o3122}</li> <li className="o">{detailProduct.o3123}</li> <li className="o">{detailProduct.o3124}</li> <li className="o">{detailProduct.o3125}</li>
<li className="ques1">{detailProduct.mcq626}</li> <li className="o">{detailProduct.o3126}</li> <li className="o">{detailProduct.o3127}</li> <li className="o">{detailProduct.o3128}</li> <li className="o">{detailProduct.o3129}</li> <li className="o">{detailProduct.o3130}</li>
<li className="ques1">{detailProduct.mcq627}</li> <li className="o">{detailProduct.o3131}</li> <li className="o">{detailProduct.o3132}</li> <li className="o">{detailProduct.o3133}</li> <li className="o">{detailProduct.o3134}</li> <li className="o">{detailProduct.o3135}</li>
<li className="ques1">{detailProduct.mcq628}</li> <li className="o">{detailProduct.o3136}</li> <li className="o">{detailProduct.o3137}</li> <li className="o">{detailProduct.o3138}</li> <li className="o">{detailProduct.o3139}</li> <li className="o">{detailProduct.o3140}</li>
<li className="ques1">{detailProduct.mcq629}</li> <li className="o">{detailProduct.o3141}</li> <li className="o">{detailProduct.o3142}</li> <li className="o">{detailProduct.o3143}</li> <li className="o">{detailProduct.o3144}</li> <li className="o">{detailProduct.o3145}</li>
<li className="ques1">{detailProduct.mcq630}</li> <li className="o">{detailProduct.o3146}</li> <li className="o">{detailProduct.o3147}</li> <li className="o">{detailProduct.o3148}</li> <li className="o">{detailProduct.o3149}</li> <li className="o">{detailProduct.o3150}</li>
  </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="H-H" /><label className="topics" for="H-H">🔻{detailProduct.t64}</label>
<ul>
<li className="ques1">{detailProduct.mcq631}</li> <li className="o">{detailProduct.o3151}</li> <li className="o">{detailProduct.o3152}</li> <li className="o">{detailProduct.o3153}</li> <li className="o">{detailProduct.o3154}</li> <li className="o">{detailProduct.o3155}</li>
<li className="ques1">{detailProduct.mcq632}</li> <li className="o">{detailProduct.o3156}</li> <li className="o">{detailProduct.o3157}</li> <li className="o">{detailProduct.o3158}</li> <li className="o">{detailProduct.o3159}</li> <li className="o">{detailProduct.o3160}</li>
<li className="ques1">{detailProduct.mcq633}</li> <li className="o">{detailProduct.o3161}</li> <li className="o">{detailProduct.o3162}</li> <li className="o">{detailProduct.o3163}</li> <li className="o">{detailProduct.o3164}</li> <li className="o">{detailProduct.o3165}</li>
<li className="ques1">{detailProduct.mcq634}</li> <li className="o">{detailProduct.o3166}</li> <li className="o">{detailProduct.o3167}</li> <li className="o">{detailProduct.o3168}</li> <li className="o">{detailProduct.o3169}</li> <li className="o">{detailProduct.o3170}</li>
<li className="ques1">{detailProduct.mcq635}</li> <li className="o">{detailProduct.o3171}</li> <li className="o">{detailProduct.o3172}</li> <li className="o">{detailProduct.o3173}</li> <li className="o">{detailProduct.o3174}</li> <li className="o">{detailProduct.o3175}</li>
<li className="ques1">{detailProduct.mcq636}</li> <li className="o">{detailProduct.o3176}</li> <li className="o">{detailProduct.o3177}</li> <li className="o">{detailProduct.o3178}</li> <li className="o">{detailProduct.o3179}</li> <li className="o">{detailProduct.o3180}</li>
<li className="ques1">{detailProduct.mcq637}</li> <li className="o">{detailProduct.o3181}</li> <li className="o">{detailProduct.o3182}</li> <li className="o">{detailProduct.o3183}</li> <li className="o">{detailProduct.o3184}</li> <li className="o">{detailProduct.o3185}</li>
<li className="ques1">{detailProduct.mcq638}</li> <li className="o">{detailProduct.o3186}</li> <li className="o">{detailProduct.o3187}</li> <li className="o">{detailProduct.o3188}</li> <li className="o">{detailProduct.o3189}</li> <li className="o">{detailProduct.o3190}</li>
<li className="ques1">{detailProduct.mcq639}</li> <li className="o">{detailProduct.o3191}</li> <li className="o">{detailProduct.o3192}</li> <li className="o">{detailProduct.o3193}</li> <li className="o">{detailProduct.o3194}</li> <li className="o">{detailProduct.o3195}</li>
<li className="ques1">{detailProduct.mcq640}</li> <li className="o">{detailProduct.o3196}</li> <li className="o">{detailProduct.o3197}</li> <li className="o">{detailProduct.o3198}</li> <li className="o">{detailProduct.o3199}</li> <li className="o">{detailProduct.o3200}</li>
 </ul></div></li></ul>
     
     </div></div>

     <div className="multi-level"><div className="item"><input type="checkbox" id="I" /><label className="lesson" for="I">{detailProduct.c9}</label>
     <ul><li><div className="sub-item"><input type="checkbox" id="I-A" /><label className="topics" for="I-A">🔻{detailProduct.t65}</label>
<ul>
<li className="ques1">{detailProduct.mcq641}</li> <li className="o">{detailProduct.o3201}</li> <li className="o">{detailProduct.o3202}</li> <li className="o">{detailProduct.o3203}</li> <li className="o">{detailProduct.o3204}</li> <li className="o">{detailProduct.o3205}</li>
<li className="ques1">{detailProduct.mcq642}</li> <li className="o">{detailProduct.o3206}</li> <li className="o">{detailProduct.o3207}</li> <li className="o">{detailProduct.o3208}</li> <li className="o">{detailProduct.o3209}</li> <li className="o">{detailProduct.o3210}</li>
<li className="ques1">{detailProduct.mcq643}</li> <li className="o">{detailProduct.o3211}</li> <li className="o">{detailProduct.o3212}</li> <li className="o">{detailProduct.o3213}</li> <li className="o">{detailProduct.o3214}</li> <li className="o">{detailProduct.o3215}</li>
<li className="ques1">{detailProduct.mcq644}</li> <li className="o">{detailProduct.o3216}</li> <li className="o">{detailProduct.o3217}</li> <li className="o">{detailProduct.o3218}</li> <li className="o">{detailProduct.o3219}</li> <li className="o">{detailProduct.o3220}</li>
<li className="ques1">{detailProduct.mcq645}</li> <li className="o">{detailProduct.o3221}</li> <li className="o">{detailProduct.o3222}</li> <li className="o">{detailProduct.o3223}</li> <li className="o">{detailProduct.o3224}</li> <li className="o">{detailProduct.o3225}</li>
<li className="ques1">{detailProduct.mcq646}</li> <li className="o">{detailProduct.o3226}</li> <li className="o">{detailProduct.o3227}</li> <li className="o">{detailProduct.o3228}</li> <li className="o">{detailProduct.o3229}</li> <li className="o">{detailProduct.o3230}</li>
<li className="ques1">{detailProduct.mcq647}</li> <li className="o">{detailProduct.o3231}</li> <li className="o">{detailProduct.o3232}</li> <li className="o">{detailProduct.o3233}</li> <li className="o">{detailProduct.o3234}</li> <li className="o">{detailProduct.o3235}</li>
<li className="ques1">{detailProduct.mcq648}</li> <li className="o">{detailProduct.o3236}</li> <li className="o">{detailProduct.o3237}</li> <li className="o">{detailProduct.o3238}</li> <li className="o">{detailProduct.o3239}</li> <li className="o">{detailProduct.o3240}</li>
<li className="ques1">{detailProduct.mcq649}</li> <li className="o">{detailProduct.o3241}</li> <li className="o">{detailProduct.o3242}</li> <li className="o">{detailProduct.o3243}</li> <li className="o">{detailProduct.o3244}</li> <li className="o">{detailProduct.o3245}</li>
<li className="ques1">{detailProduct.mcq650}</li> <li className="o">{detailProduct.o3246}</li> <li className="o">{detailProduct.o3247}</li> <li className="o">{detailProduct.o3248}</li> <li className="o">{detailProduct.o3249}</li> <li className="o">{detailProduct.o3250}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="I-B" /><label className="topics" for="I-B">🔻{detailProduct.t66}</label>
<ul>
<li className="ques1">{detailProduct.mcq651}</li> <li className="o">{detailProduct.o3251}</li> <li className="o">{detailProduct.o3252}</li> <li className="o">{detailProduct.o3253}</li> <li className="o">{detailProduct.o3254}</li> <li className="o">{detailProduct.o3255}</li>
<li className="ques1">{detailProduct.mcq652}</li> <li className="o">{detailProduct.o3256}</li> <li className="o">{detailProduct.o3257}</li> <li className="o">{detailProduct.o3258}</li> <li className="o">{detailProduct.o3259}</li> <li className="o">{detailProduct.o3260}</li>
<li className="ques1">{detailProduct.mcq653}</li> <li className="o">{detailProduct.o3261}</li> <li className="o">{detailProduct.o3262}</li> <li className="o">{detailProduct.o3263}</li> <li className="o">{detailProduct.o3264}</li> <li className="o">{detailProduct.o3265}</li>
<li className="ques1">{detailProduct.mcq654}</li> <li className="o">{detailProduct.o3266}</li> <li className="o">{detailProduct.o3267}</li> <li className="o">{detailProduct.o3268}</li> <li className="o">{detailProduct.o3269}</li> <li className="o">{detailProduct.o3270}</li>
<li className="ques1">{detailProduct.mcq655}</li> <li className="o">{detailProduct.o3271}</li> <li className="o">{detailProduct.o3272}</li> <li className="o">{detailProduct.o3273}</li> <li className="o">{detailProduct.o3274}</li> <li className="o">{detailProduct.o3275}</li>
<li className="ques1">{detailProduct.mcq656}</li> <li className="o">{detailProduct.o3276}</li> <li className="o">{detailProduct.o3277}</li> <li className="o">{detailProduct.o3278}</li> <li className="o">{detailProduct.o3279}</li> <li className="o">{detailProduct.o3280}</li>
<li className="ques1">{detailProduct.mcq657}</li> <li className="o">{detailProduct.o3281}</li> <li className="o">{detailProduct.o3282}</li> <li className="o">{detailProduct.o3283}</li> <li className="o">{detailProduct.o3284}</li> <li className="o">{detailProduct.o3285}</li>
<li className="ques1">{detailProduct.mcq658}</li> <li className="o">{detailProduct.o3286}</li> <li className="o">{detailProduct.o3287}</li> <li className="o">{detailProduct.o3288}</li> <li className="o">{detailProduct.o3289}</li> <li className="o">{detailProduct.o3290}</li>
<li className="ques1">{detailProduct.mcq659}</li> <li className="o">{detailProduct.o3291}</li> <li className="o">{detailProduct.o3292}</li> <li className="o">{detailProduct.o3293}</li> <li className="o">{detailProduct.o3294}</li> <li className="o">{detailProduct.o3295}</li>
<li className="ques1">{detailProduct.mcq660}</li> <li className="o">{detailProduct.o3296}</li> <li className="o">{detailProduct.o3297}</li> <li className="o">{detailProduct.o3298}</li> <li className="o">{detailProduct.o3299}</li> <li className="o">{detailProduct.o3300}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="I-C" /><label className="topics" for="I-C">🔻{detailProduct.t67}</label>
<ul>
<li className="ques1">{detailProduct.mcq661}</li> <li className="o">{detailProduct.o3301}</li> <li className="o">{detailProduct.o3302}</li> <li className="o">{detailProduct.o3303}</li> <li className="o">{detailProduct.o3304}</li> <li className="o">{detailProduct.o3305}</li>
<li className="ques1">{detailProduct.mcq662}</li> <li className="o">{detailProduct.o3306}</li> <li className="o">{detailProduct.o3307}</li> <li className="o">{detailProduct.o3308}</li> <li className="o">{detailProduct.o3309}</li> <li className="o">{detailProduct.o3310}</li>
<li className="ques1">{detailProduct.mcq663}</li> <li className="o">{detailProduct.o3311}</li> <li className="o">{detailProduct.o3312}</li> <li className="o">{detailProduct.o3313}</li> <li className="o">{detailProduct.o3314}</li> <li className="o">{detailProduct.o3315}</li>
<li className="ques1">{detailProduct.mcq664}</li> <li className="o">{detailProduct.o3316}</li> <li className="o">{detailProduct.o3317}</li> <li className="o">{detailProduct.o3318}</li> <li className="o">{detailProduct.o3319}</li> <li className="o">{detailProduct.o3320}</li>
<li className="ques1">{detailProduct.mcq665}</li> <li className="o">{detailProduct.o3321}</li> <li className="o">{detailProduct.o3322}</li> <li className="o">{detailProduct.o3323}</li> <li className="o">{detailProduct.o3324}</li> <li className="o">{detailProduct.o3325}</li>
<li className="ques1">{detailProduct.mcq666}</li> <li className="o">{detailProduct.o3326}</li> <li className="o">{detailProduct.o3327}</li> <li className="o">{detailProduct.o3328}</li> <li className="o">{detailProduct.o3329}</li> <li className="o">{detailProduct.o3330}</li>
<li className="ques1">{detailProduct.mcq667}</li> <li className="o">{detailProduct.o3331}</li> <li className="o">{detailProduct.o3332}</li> <li className="o">{detailProduct.o3333}</li> <li className="o">{detailProduct.o3334}</li> <li className="o">{detailProduct.o3335}</li>
<li className="ques1">{detailProduct.mcq668}</li> <li className="o">{detailProduct.o3336}</li> <li className="o">{detailProduct.o3337}</li> <li className="o">{detailProduct.o3338}</li> <li className="o">{detailProduct.o3339}</li> <li className="o">{detailProduct.o3340}</li>
<li className="ques1">{detailProduct.mcq669}</li> <li className="o">{detailProduct.o3341}</li> <li className="o">{detailProduct.o3342}</li> <li className="o">{detailProduct.o3343}</li> <li className="o">{detailProduct.o3344}</li> <li className="o">{detailProduct.o3345}</li>
<li className="ques1">{detailProduct.mcq670}</li> <li className="o">{detailProduct.o3346}</li> <li className="o">{detailProduct.o3347}</li> <li className="o">{detailProduct.o3348}</li> <li className="o">{detailProduct.o3349}</li> <li className="o">{detailProduct.o3350}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="I-D" /><label className="topics" for="I-D">🔻{detailProduct.t68}</label>
<ul>
<li className="ques1">{detailProduct.mcq671}</li> <li className="o">{detailProduct.o3351}</li> <li className="o">{detailProduct.o3352}</li> <li className="o">{detailProduct.o3353}</li> <li className="o">{detailProduct.o3354}</li> <li className="o">{detailProduct.o3355}</li>
<li className="ques1">{detailProduct.mcq672}</li> <li className="o">{detailProduct.o3356}</li> <li className="o">{detailProduct.o3357}</li> <li className="o">{detailProduct.o3358}</li> <li className="o">{detailProduct.o3359}</li> <li className="o">{detailProduct.o3360}</li>
<li className="ques1">{detailProduct.mcq673}</li> <li className="o">{detailProduct.o3361}</li> <li className="o">{detailProduct.o3362}</li> <li className="o">{detailProduct.o3363}</li> <li className="o">{detailProduct.o3364}</li> <li className="o">{detailProduct.o3365}</li>
<li className="ques1">{detailProduct.mcq674}</li> <li className="o">{detailProduct.o3366}</li> <li className="o">{detailProduct.o3367}</li> <li className="o">{detailProduct.o3368}</li> <li className="o">{detailProduct.o3369}</li> <li className="o">{detailProduct.o3370}</li>
<li className="ques1">{detailProduct.mcq675}</li> <li className="o">{detailProduct.o3371}</li> <li className="o">{detailProduct.o3372}</li> <li className="o">{detailProduct.o3373}</li> <li className="o">{detailProduct.o3374}</li> <li className="o">{detailProduct.o3375}</li>
<li className="ques1">{detailProduct.mcq676}</li> <li className="o">{detailProduct.o3376}</li> <li className="o">{detailProduct.o3377}</li> <li className="o">{detailProduct.o3378}</li> <li className="o">{detailProduct.o3379}</li> <li className="o">{detailProduct.o3380}</li>
<li className="ques1">{detailProduct.mcq677}</li> <li className="o">{detailProduct.o3381}</li> <li className="o">{detailProduct.o3382}</li> <li className="o">{detailProduct.o3383}</li> <li className="o">{detailProduct.o3384}</li> <li className="o">{detailProduct.o3385}</li>
<li className="ques1">{detailProduct.mcq678}</li> <li className="o">{detailProduct.o3386}</li> <li className="o">{detailProduct.o3387}</li> <li className="o">{detailProduct.o3388}</li> <li className="o">{detailProduct.o3389}</li> <li className="o">{detailProduct.o3390}</li>
<li className="ques1">{detailProduct.mcq679}</li> <li className="o">{detailProduct.o3391}</li> <li className="o">{detailProduct.o3392}</li> <li className="o">{detailProduct.o3393}</li> <li className="o">{detailProduct.o3394}</li> <li className="o">{detailProduct.o3395}</li>
<li className="ques1">{detailProduct.mcq680}</li> <li className="o">{detailProduct.o3396}</li> <li className="o">{detailProduct.o3397}</li> <li className="o">{detailProduct.o3398}</li> <li className="o">{detailProduct.o3399}</li> <li className="o">{detailProduct.o3400}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="I-E" /><label className="topics" for="I-E">🔻{detailProduct.t69}</label>
<ul>
<li className="ques1">{detailProduct.mcq681}</li> <li className="o">{detailProduct.o3401}</li> <li className="o">{detailProduct.o3402}</li> <li className="o">{detailProduct.o3403}</li> <li className="o">{detailProduct.o3404}</li> <li className="o">{detailProduct.o3405}</li>
<li className="ques1">{detailProduct.mcq682}</li> <li className="o">{detailProduct.o3406}</li> <li className="o">{detailProduct.o3407}</li> <li className="o">{detailProduct.o3408}</li> <li className="o">{detailProduct.o3409}</li> <li className="o">{detailProduct.o3410}</li>
<li className="ques1">{detailProduct.mcq683}</li> <li className="o">{detailProduct.o3411}</li> <li className="o">{detailProduct.o3412}</li> <li className="o">{detailProduct.o3413}</li> <li className="o">{detailProduct.o3414}</li> <li className="o">{detailProduct.o3415}</li>
<li className="ques1">{detailProduct.mcq684}</li> <li className="o">{detailProduct.o3416}</li> <li className="o">{detailProduct.o3417}</li> <li className="o">{detailProduct.o3418}</li> <li className="o">{detailProduct.o3419}</li> <li className="o">{detailProduct.o3420}</li>
<li className="ques1">{detailProduct.mcq685}</li> <li className="o">{detailProduct.o3421}</li> <li className="o">{detailProduct.o3422}</li> <li className="o">{detailProduct.o3423}</li> <li className="o">{detailProduct.o3424}</li> <li className="o">{detailProduct.o3425}</li>
<li className="ques1">{detailProduct.mcq686}</li> <li className="o">{detailProduct.o3426}</li> <li className="o">{detailProduct.o3427}</li> <li className="o">{detailProduct.o3428}</li> <li className="o">{detailProduct.o3429}</li> <li className="o">{detailProduct.o3430}</li>
<li className="ques1">{detailProduct.mcq687}</li> <li className="o">{detailProduct.o3431}</li> <li className="o">{detailProduct.o3432}</li> <li className="o">{detailProduct.o3433}</li> <li className="o">{detailProduct.o3434}</li> <li className="o">{detailProduct.o3435}</li>
<li className="ques1">{detailProduct.mcq688}</li> <li className="o">{detailProduct.o3436}</li> <li className="o">{detailProduct.o3437}</li> <li className="o">{detailProduct.o3438}</li> <li className="o">{detailProduct.o3439}</li> <li className="o">{detailProduct.o3440}</li>
<li className="ques1">{detailProduct.mcq689}</li> <li className="o">{detailProduct.o3441}</li> <li className="o">{detailProduct.o3442}</li> <li className="o">{detailProduct.o3443}</li> <li className="o">{detailProduct.o3444}</li> <li className="o">{detailProduct.o3445}</li>
<li className="ques1">{detailProduct.mcq690}</li> <li className="o">{detailProduct.o3446}</li> <li className="o">{detailProduct.o3447}</li> <li className="o">{detailProduct.o3448}</li> <li className="o">{detailProduct.o3449}</li> <li className="o">{detailProduct.o3450}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="I-F" /><label className="topics" for="I-F">🔻{detailProduct.t70}</label>
<ul>
<li className="ques1">{detailProduct.mcq691}</li> <li className="o">{detailProduct.o3451}</li> <li className="o">{detailProduct.o3452}</li> <li className="o">{detailProduct.o3453}</li> <li className="o">{detailProduct.o3454}</li> <li className="o">{detailProduct.o3455}</li>
<li className="ques1">{detailProduct.mcq692}</li> <li className="o">{detailProduct.o3456}</li> <li className="o">{detailProduct.o3457}</li> <li className="o">{detailProduct.o3458}</li> <li className="o">{detailProduct.o3459}</li> <li className="o">{detailProduct.o3460}</li>
<li className="ques1">{detailProduct.mcq693}</li> <li className="o">{detailProduct.o3461}</li> <li className="o">{detailProduct.o3462}</li> <li className="o">{detailProduct.o3463}</li> <li className="o">{detailProduct.o3464}</li> <li className="o">{detailProduct.o3465}</li>
<li className="ques1">{detailProduct.mcq694}</li> <li className="o">{detailProduct.o3466}</li> <li className="o">{detailProduct.o3467}</li> <li className="o">{detailProduct.o3468}</li> <li className="o">{detailProduct.o3469}</li> <li className="o">{detailProduct.o3470}</li>
<li className="ques1">{detailProduct.mcq695}</li> <li className="o">{detailProduct.o3471}</li> <li className="o">{detailProduct.o3472}</li> <li className="o">{detailProduct.o3473}</li> <li className="o">{detailProduct.o3474}</li> <li className="o">{detailProduct.o3475}</li>
<li className="ques1">{detailProduct.mcq696}</li> <li className="o">{detailProduct.o3476}</li> <li className="o">{detailProduct.o3477}</li> <li className="o">{detailProduct.o3478}</li> <li className="o">{detailProduct.o3479}</li> <li className="o">{detailProduct.o3480}</li>
<li className="ques1">{detailProduct.mcq697}</li> <li className="o">{detailProduct.o3481}</li> <li className="o">{detailProduct.o3482}</li> <li className="o">{detailProduct.o3483}</li> <li className="o">{detailProduct.o3484}</li> <li className="o">{detailProduct.o3485}</li>
<li className="ques1">{detailProduct.mcq698}</li> <li className="o">{detailProduct.o3486}</li> <li className="o">{detailProduct.o3487}</li> <li className="o">{detailProduct.o3488}</li> <li className="o">{detailProduct.o3489}</li> <li className="o">{detailProduct.o3490}</li>
<li className="ques1">{detailProduct.mcq699}</li> <li className="o">{detailProduct.o3491}</li> <li className="o">{detailProduct.o3492}</li> <li className="o">{detailProduct.o3493}</li> <li className="o">{detailProduct.o3494}</li> <li className="o">{detailProduct.o3495}</li>
<li className="ques1">{detailProduct.mcq700}</li> <li className="o">{detailProduct.o3496}</li> <li className="o">{detailProduct.o3497}</li> <li className="o">{detailProduct.o3498}</li> <li className="o">{detailProduct.o3499}</li> <li className="o">{detailProduct.o3500}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="I-G" /><label className="topics" for="I-G">🔻{detailProduct.t71}</label>
<ul>
<li className="ques1">{detailProduct.mcq701}</li> <li className="o">{detailProduct.o3501}</li> <li className="o">{detailProduct.o3502}</li> <li className="o">{detailProduct.o3503}</li> <li className="o">{detailProduct.o3504}</li> <li className="o">{detailProduct.o3505}</li>
<li className="ques1">{detailProduct.mcq702}</li> <li className="o">{detailProduct.o3506}</li> <li className="o">{detailProduct.o3507}</li> <li className="o">{detailProduct.o3508}</li> <li className="o">{detailProduct.o3509}</li> <li className="o">{detailProduct.o3510}</li>
<li className="ques1">{detailProduct.mcq703}</li> <li className="o">{detailProduct.o3511}</li> <li className="o">{detailProduct.o3512}</li> <li className="o">{detailProduct.o3513}</li> <li className="o">{detailProduct.o3514}</li> <li className="o">{detailProduct.o3515}</li>
<li className="ques1">{detailProduct.mcq704}</li> <li className="o">{detailProduct.o3516}</li> <li className="o">{detailProduct.o3517}</li> <li className="o">{detailProduct.o3518}</li> <li className="o">{detailProduct.o3519}</li> <li className="o">{detailProduct.o3520}</li>
<li className="ques1">{detailProduct.mcq705}</li> <li className="o">{detailProduct.o3521}</li> <li className="o">{detailProduct.o3522}</li> <li className="o">{detailProduct.o3523}</li> <li className="o">{detailProduct.o3524}</li> <li className="o">{detailProduct.o3525}</li>
<li className="ques1">{detailProduct.mcq706}</li> <li className="o">{detailProduct.o3526}</li> <li className="o">{detailProduct.o3527}</li> <li className="o">{detailProduct.o3528}</li> <li className="o">{detailProduct.o3529}</li> <li className="o">{detailProduct.o3530}</li>
<li className="ques1">{detailProduct.mcq707}</li> <li className="o">{detailProduct.o3531}</li> <li className="o">{detailProduct.o3532}</li> <li className="o">{detailProduct.o3533}</li> <li className="o">{detailProduct.o3534}</li> <li className="o">{detailProduct.o3535}</li>
<li className="ques1">{detailProduct.mcq708}</li> <li className="o">{detailProduct.o3536}</li> <li className="o">{detailProduct.o3537}</li> <li className="o">{detailProduct.o3538}</li> <li className="o">{detailProduct.o3539}</li> <li className="o">{detailProduct.o3540}</li>
<li className="ques1">{detailProduct.mcq709}</li> <li className="o">{detailProduct.o3541}</li> <li className="o">{detailProduct.o3542}</li> <li className="o">{detailProduct.o3543}</li> <li className="o">{detailProduct.o3544}</li> <li className="o">{detailProduct.o3545}</li>
<li className="ques1">{detailProduct.mcq710}</li> <li className="o">{detailProduct.o3546}</li> <li className="o">{detailProduct.o3547}</li> <li className="o">{detailProduct.o3548}</li> <li className="o">{detailProduct.o3549}</li> <li className="o">{detailProduct.o3550}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="I-H" /><label className="topics" for="I-H">🔻{detailProduct.t72}</label>
<ul>
<li className="ques1">{detailProduct.mcq711}</li> <li className="o">{detailProduct.o3551}</li> <li className="o">{detailProduct.o3552}</li> <li className="o">{detailProduct.o3553}</li> <li className="o">{detailProduct.o3554}</li> <li className="o">{detailProduct.o3555}</li>
<li className="ques1">{detailProduct.mcq712}</li> <li className="o">{detailProduct.o3556}</li> <li className="o">{detailProduct.o3557}</li> <li className="o">{detailProduct.o3558}</li> <li className="o">{detailProduct.o3559}</li> <li className="o">{detailProduct.o3560}</li>
<li className="ques1">{detailProduct.mcq713}</li> <li className="o">{detailProduct.o3561}</li> <li className="o">{detailProduct.o3562}</li> <li className="o">{detailProduct.o3563}</li> <li className="o">{detailProduct.o3564}</li> <li className="o">{detailProduct.o3565}</li>
<li className="ques1">{detailProduct.mcq714}</li> <li className="o">{detailProduct.o3566}</li> <li className="o">{detailProduct.o3567}</li> <li className="o">{detailProduct.o3568}</li> <li className="o">{detailProduct.o3569}</li> <li className="o">{detailProduct.o3570}</li>
<li className="ques1">{detailProduct.mcq715}</li> <li className="o">{detailProduct.o3571}</li> <li className="o">{detailProduct.o3572}</li> <li className="o">{detailProduct.o3573}</li> <li className="o">{detailProduct.o3574}</li> <li className="o">{detailProduct.o3575}</li>
<li className="ques1">{detailProduct.mcq716}</li> <li className="o">{detailProduct.o3576}</li> <li className="o">{detailProduct.o3577}</li> <li className="o">{detailProduct.o3578}</li> <li className="o">{detailProduct.o3579}</li> <li className="o">{detailProduct.o3580}</li>
<li className="ques1">{detailProduct.mcq717}</li> <li className="o">{detailProduct.o3581}</li> <li className="o">{detailProduct.o3582}</li> <li className="o">{detailProduct.o3583}</li> <li className="o">{detailProduct.o3584}</li> <li className="o">{detailProduct.o3585}</li>
<li className="ques1">{detailProduct.mcq718}</li> <li className="o">{detailProduct.o3586}</li> <li className="o">{detailProduct.o3587}</li> <li className="o">{detailProduct.o3588}</li> <li className="o">{detailProduct.o3589}</li> <li className="o">{detailProduct.o3590}</li>
<li className="ques1">{detailProduct.mcq719}</li> <li className="o">{detailProduct.o3591}</li> <li className="o">{detailProduct.o3592}</li> <li className="o">{detailProduct.o3593}</li> <li className="o">{detailProduct.o3594}</li> <li className="o">{detailProduct.o3595}</li>
<li className="ques1">{detailProduct.mcq720}</li> <li className="o">{detailProduct.o3596}</li> <li className="o">{detailProduct.o3597}</li> <li className="o">{detailProduct.o3598}</li> <li className="o">{detailProduct.o3599}</li> <li className="o">{detailProduct.o3600}</li>
  </ul></div></li></ul>
     
     </div></div>

     <div className="multi-level"><div className="item"><input type="checkbox" id="J" /><label className="lesson" for="J">{detailProduct.c10}</label>
     <ul><li><div className="sub-item"><input type="checkbox" id="J-A" /><label className="topics" for="J-A">🔻{detailProduct.t73}</label>
<ul>
<li className="ques1">{detailProduct.mcq721}</li> <li className="o">{detailProduct.o3601}</li> <li className="o">{detailProduct.o3602}</li> <li className="o">{detailProduct.o3603}</li> <li className="o">{detailProduct.o3604}</li> <li className="o">{detailProduct.o3605}</li>
<li className="ques1">{detailProduct.mcq722}</li> <li className="o">{detailProduct.o3606}</li> <li className="o">{detailProduct.o3607}</li> <li className="o">{detailProduct.o3608}</li> <li className="o">{detailProduct.o3609}</li> <li className="o">{detailProduct.o3610}</li>
<li className="ques1">{detailProduct.mcq723}</li> <li className="o">{detailProduct.o3611}</li> <li className="o">{detailProduct.o3612}</li> <li className="o">{detailProduct.o3613}</li> <li className="o">{detailProduct.o3614}</li> <li className="o">{detailProduct.o3615}</li>
<li className="ques1">{detailProduct.mcq724}</li> <li className="o">{detailProduct.o3616}</li> <li className="o">{detailProduct.o3617}</li> <li className="o">{detailProduct.o3618}</li> <li className="o">{detailProduct.o3619}</li> <li className="o">{detailProduct.o3620}</li>
<li className="ques1">{detailProduct.mcq725}</li> <li className="o">{detailProduct.o3621}</li> <li className="o">{detailProduct.o3622}</li> <li className="o">{detailProduct.o3623}</li> <li className="o">{detailProduct.o3624}</li> <li className="o">{detailProduct.o3625}</li>
<li className="ques1">{detailProduct.mcq726}</li> <li className="o">{detailProduct.o3626}</li> <li className="o">{detailProduct.o3627}</li> <li className="o">{detailProduct.o3628}</li> <li className="o">{detailProduct.o3629}</li> <li className="o">{detailProduct.o3630}</li>
<li className="ques1">{detailProduct.mcq727}</li> <li className="o">{detailProduct.o3631}</li> <li className="o">{detailProduct.o3632}</li> <li className="o">{detailProduct.o3633}</li> <li className="o">{detailProduct.o3634}</li> <li className="o">{detailProduct.o3635}</li>
<li className="ques1">{detailProduct.mcq728}</li> <li className="o">{detailProduct.o3636}</li> <li className="o">{detailProduct.o3637}</li> <li className="o">{detailProduct.o3638}</li> <li className="o">{detailProduct.o3639}</li> <li className="o">{detailProduct.o3640}</li>
<li className="ques1">{detailProduct.mcq729}</li> <li className="o">{detailProduct.o3641}</li> <li className="o">{detailProduct.o3642}</li> <li className="o">{detailProduct.o3643}</li> <li className="o">{detailProduct.o3644}</li> <li className="o">{detailProduct.o3645}</li>
<li className="ques1">{detailProduct.mcq730}</li> <li className="o">{detailProduct.o3646}</li> <li className="o">{detailProduct.o3647}</li> <li className="o">{detailProduct.o3648}</li> <li className="o">{detailProduct.o3649}</li> <li className="o">{detailProduct.o3650}</li>
  </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="J-B" /><label className="topics" for="J-B">🔻{detailProduct.t74}</label>
<ul>
<li className="ques1">{detailProduct.mcq731}</li> <li className="o">{detailProduct.o3651}</li> <li className="o">{detailProduct.o3652}</li> <li className="o">{detailProduct.o3653}</li> <li className="o">{detailProduct.o3654}</li> <li className="o">{detailProduct.o3655}</li>
<li className="ques1">{detailProduct.mcq732}</li> <li className="o">{detailProduct.o3656}</li> <li className="o">{detailProduct.o3657}</li> <li className="o">{detailProduct.o3658}</li> <li className="o">{detailProduct.o3659}</li> <li className="o">{detailProduct.o3660}</li>
<li className="ques1">{detailProduct.mcq733}</li> <li className="o">{detailProduct.o3661}</li> <li className="o">{detailProduct.o3662}</li> <li className="o">{detailProduct.o3663}</li> <li className="o">{detailProduct.o3664}</li> <li className="o">{detailProduct.o3665}</li>
<li className="ques1">{detailProduct.mcq734}</li> <li className="o">{detailProduct.o3666}</li> <li className="o">{detailProduct.o3667}</li> <li className="o">{detailProduct.o3668}</li> <li className="o">{detailProduct.o3669}</li> <li className="o">{detailProduct.o3670}</li>
<li className="ques1">{detailProduct.mcq735}</li> <li className="o">{detailProduct.o3671}</li> <li className="o">{detailProduct.o3672}</li> <li className="o">{detailProduct.o3673}</li> <li className="o">{detailProduct.o3674}</li> <li className="o">{detailProduct.o3675}</li>
<li className="ques1">{detailProduct.mcq736}</li> <li className="o">{detailProduct.o3676}</li> <li className="o">{detailProduct.o3677}</li> <li className="o">{detailProduct.o3678}</li> <li className="o">{detailProduct.o3679}</li> <li className="o">{detailProduct.o3680}</li>
<li className="ques1">{detailProduct.mcq737}</li> <li className="o">{detailProduct.o3681}</li> <li className="o">{detailProduct.o3682}</li> <li className="o">{detailProduct.o3683}</li> <li className="o">{detailProduct.o3684}</li> <li className="o">{detailProduct.o3685}</li>
<li className="ques1">{detailProduct.mcq738}</li> <li className="o">{detailProduct.o3686}</li> <li className="o">{detailProduct.o3687}</li> <li className="o">{detailProduct.o3688}</li> <li className="o">{detailProduct.o3689}</li> <li className="o">{detailProduct.o3690}</li>
<li className="ques1">{detailProduct.mcq739}</li> <li className="o">{detailProduct.o3691}</li> <li className="o">{detailProduct.o3692}</li> <li className="o">{detailProduct.o3693}</li> <li className="o">{detailProduct.o3694}</li> <li className="o">{detailProduct.o3695}</li>
<li className="ques1">{detailProduct.mcq740}</li> <li className="o">{detailProduct.o3696}</li> <li className="o">{detailProduct.o3697}</li> <li className="o">{detailProduct.o3698}</li> <li className="o">{detailProduct.o3699}</li> <li className="o">{detailProduct.o3700}</li>
</ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="J-C" /><label className="topics" for="J-C">🔻{detailProduct.t75}</label>
<ul>
<li className="ques1">{detailProduct.mcq741}</li> <li className="o">{detailProduct.o3701}</li> <li className="o">{detailProduct.o3702}</li> <li className="o">{detailProduct.o3703}</li> <li className="o">{detailProduct.o3704}</li> <li className="o">{detailProduct.o3705}</li>
<li className="ques1">{detailProduct.mcq742}</li> <li className="o">{detailProduct.o3706}</li> <li className="o">{detailProduct.o3707}</li> <li className="o">{detailProduct.o3708}</li> <li className="o">{detailProduct.o3709}</li> <li className="o">{detailProduct.o3710}</li>
<li className="ques1">{detailProduct.mcq743}</li> <li className="o">{detailProduct.o3711}</li> <li className="o">{detailProduct.o3712}</li> <li className="o">{detailProduct.o3713}</li> <li className="o">{detailProduct.o3714}</li> <li className="o">{detailProduct.o3715}</li>
<li className="ques1">{detailProduct.mcq744}</li> <li className="o">{detailProduct.o3716}</li> <li className="o">{detailProduct.o3717}</li> <li className="o">{detailProduct.o3718}</li> <li className="o">{detailProduct.o3719}</li> <li className="o">{detailProduct.o3720}</li>
<li className="ques1">{detailProduct.mcq745}</li> <li className="o">{detailProduct.o3721}</li> <li className="o">{detailProduct.o3722}</li> <li className="o">{detailProduct.o3723}</li> <li className="o">{detailProduct.o3724}</li> <li className="o">{detailProduct.o3725}</li>
<li className="ques1">{detailProduct.mcq746}</li> <li className="o">{detailProduct.o3726}</li> <li className="o">{detailProduct.o3727}</li> <li className="o">{detailProduct.o3728}</li> <li className="o">{detailProduct.o3729}</li> <li className="o">{detailProduct.o3730}</li>
<li className="ques1">{detailProduct.mcq747}</li> <li className="o">{detailProduct.o3731}</li> <li className="o">{detailProduct.o3732}</li> <li className="o">{detailProduct.o3733}</li> <li className="o">{detailProduct.o3734}</li> <li className="o">{detailProduct.o3735}</li>
<li className="ques1">{detailProduct.mcq748}</li> <li className="o">{detailProduct.o3736}</li> <li className="o">{detailProduct.o3737}</li> <li className="o">{detailProduct.o3738}</li> <li className="o">{detailProduct.o3739}</li> <li className="o">{detailProduct.o3740}</li>
<li className="ques1">{detailProduct.mcq749}</li> <li className="o">{detailProduct.o3741}</li> <li className="o">{detailProduct.o3742}</li> <li className="o">{detailProduct.o3743}</li> <li className="o">{detailProduct.o3744}</li> <li className="o">{detailProduct.o3745}</li>
<li className="ques1">{detailProduct.mcq750}</li> <li className="o">{detailProduct.o3746}</li> <li className="o">{detailProduct.o3747}</li> <li className="o">{detailProduct.o3748}</li> <li className="o">{detailProduct.o3749}</li> <li className="o">{detailProduct.o3750}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="J-D" /><label className="topics" for="J-D">🔻{detailProduct.t76}</label>
<ul>
<li className="ques1">{detailProduct.mcq751}</li> <li className="o">{detailProduct.o3751}</li> <li className="o">{detailProduct.o3752}</li> <li className="o">{detailProduct.o3753}</li> <li className="o">{detailProduct.o3754}</li> <li className="o">{detailProduct.o3755}</li>
<li className="ques1">{detailProduct.mcq752}</li> <li className="o">{detailProduct.o3756}</li> <li className="o">{detailProduct.o3757}</li> <li className="o">{detailProduct.o3758}</li> <li className="o">{detailProduct.o3759}</li> <li className="o">{detailProduct.o3760}</li>
<li className="ques1">{detailProduct.mcq753}</li> <li className="o">{detailProduct.o3761}</li> <li className="o">{detailProduct.o3762}</li> <li className="o">{detailProduct.o3763}</li> <li className="o">{detailProduct.o3764}</li> <li className="o">{detailProduct.o3765}</li>
<li className="ques1">{detailProduct.mcq754}</li> <li className="o">{detailProduct.o3766}</li> <li className="o">{detailProduct.o3767}</li> <li className="o">{detailProduct.o3768}</li> <li className="o">{detailProduct.o3769}</li> <li className="o">{detailProduct.o3770}</li>
<li className="ques1">{detailProduct.mcq755}</li> <li className="o">{detailProduct.o3771}</li> <li className="o">{detailProduct.o3772}</li> <li className="o">{detailProduct.o3773}</li> <li className="o">{detailProduct.o3774}</li> <li className="o">{detailProduct.o3775}</li>
<li className="ques1">{detailProduct.mcq756}</li> <li className="o">{detailProduct.o3776}</li> <li className="o">{detailProduct.o3777}</li> <li className="o">{detailProduct.o3778}</li> <li className="o">{detailProduct.o3779}</li> <li className="o">{detailProduct.o3780}</li>
<li className="ques1">{detailProduct.mcq757}</li> <li className="o">{detailProduct.o3781}</li> <li className="o">{detailProduct.o3782}</li> <li className="o">{detailProduct.o3783}</li> <li className="o">{detailProduct.o3784}</li> <li className="o">{detailProduct.o3785}</li>
<li className="ques1">{detailProduct.mcq758}</li> <li className="o">{detailProduct.o3786}</li> <li className="o">{detailProduct.o3787}</li> <li className="o">{detailProduct.o3788}</li> <li className="o">{detailProduct.o3789}</li> <li className="o">{detailProduct.o3790}</li>
<li className="ques1">{detailProduct.mcq759}</li> <li className="o">{detailProduct.o3791}</li> <li className="o">{detailProduct.o3792}</li> <li className="o">{detailProduct.o3793}</li> <li className="o">{detailProduct.o3794}</li> <li className="o">{detailProduct.o3795}</li>
<li className="ques1">{detailProduct.mcq760}</li> <li className="o">{detailProduct.o3796}</li> <li className="o">{detailProduct.o3797}</li> <li className="o">{detailProduct.o3798}</li> <li className="o">{detailProduct.o3799}</li> <li className="o">{detailProduct.o3800}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="J-E" /><label className="topics" for="J-E">🔻{detailProduct.t77}</label>
<ul>
<li className="ques1">{detailProduct.mcq761}</li> <li className="o">{detailProduct.o3801}</li> <li className="o">{detailProduct.o3802}</li> <li className="o">{detailProduct.o3803}</li> <li className="o">{detailProduct.o3804}</li> <li className="o">{detailProduct.o3805}</li>
<li className="ques1">{detailProduct.mcq762}</li> <li className="o">{detailProduct.o3806}</li> <li className="o">{detailProduct.o3807}</li> <li className="o">{detailProduct.o3808}</li> <li className="o">{detailProduct.o3809}</li> <li className="o">{detailProduct.o3810}</li>
<li className="ques1">{detailProduct.mcq763}</li> <li className="o">{detailProduct.o3811}</li> <li className="o">{detailProduct.o3812}</li> <li className="o">{detailProduct.o3813}</li> <li className="o">{detailProduct.o3814}</li> <li className="o">{detailProduct.o3815}</li>
<li className="ques1">{detailProduct.mcq764}</li> <li className="o">{detailProduct.o3816}</li> <li className="o">{detailProduct.o3817}</li> <li className="o">{detailProduct.o3818}</li> <li className="o">{detailProduct.o3819}</li> <li className="o">{detailProduct.o3820}</li>
<li className="ques1">{detailProduct.mcq765}</li> <li className="o">{detailProduct.o3821}</li> <li className="o">{detailProduct.o3822}</li> <li className="o">{detailProduct.o3823}</li> <li className="o">{detailProduct.o3824}</li> <li className="o">{detailProduct.o3825}</li>
<li className="ques1">{detailProduct.mcq766}</li> <li className="o">{detailProduct.o3826}</li> <li className="o">{detailProduct.o3827}</li> <li className="o">{detailProduct.o3828}</li> <li className="o">{detailProduct.o3829}</li> <li className="o">{detailProduct.o3830}</li>
<li className="ques1">{detailProduct.mcq767}</li> <li className="o">{detailProduct.o3831}</li> <li className="o">{detailProduct.o3832}</li> <li className="o">{detailProduct.o3833}</li> <li className="o">{detailProduct.o3834}</li> <li className="o">{detailProduct.o3835}</li>
<li className="ques1">{detailProduct.mcq768}</li> <li className="o">{detailProduct.o3836}</li> <li className="o">{detailProduct.o3837}</li> <li className="o">{detailProduct.o3838}</li> <li className="o">{detailProduct.o3839}</li> <li className="o">{detailProduct.o3840}</li>
<li className="ques1">{detailProduct.mcq769}</li> <li className="o">{detailProduct.o3841}</li> <li className="o">{detailProduct.o3842}</li> <li className="o">{detailProduct.o3843}</li> <li className="o">{detailProduct.o3844}</li> <li className="o">{detailProduct.o3845}</li>
<li className="ques1">{detailProduct.mcq770}</li> <li className="o">{detailProduct.o3846}</li> <li className="o">{detailProduct.o3847}</li> <li className="o">{detailProduct.o3848}</li> <li className="o">{detailProduct.o3849}</li> <li className="o">{detailProduct.o3850}</li>
  </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="J-F" /><label className="topics" for="J-F">🔻{detailProduct.t78}</label>
<ul>
<li className="ques1">{detailProduct.mcq771}</li> <li className="o">{detailProduct.o3851}</li> <li className="o">{detailProduct.o3852}</li> <li className="o">{detailProduct.o3853}</li> <li className="o">{detailProduct.o3854}</li> <li className="o">{detailProduct.o3855}</li>
<li className="ques1">{detailProduct.mcq772}</li> <li className="o">{detailProduct.o3856}</li> <li className="o">{detailProduct.o3857}</li> <li className="o">{detailProduct.o3858}</li> <li className="o">{detailProduct.o3859}</li> <li className="o">{detailProduct.o3860}</li>
<li className="ques1">{detailProduct.mcq773}</li> <li className="o">{detailProduct.o3861}</li> <li className="o">{detailProduct.o3862}</li> <li className="o">{detailProduct.o3863}</li> <li className="o">{detailProduct.o3864}</li> <li className="o">{detailProduct.o3865}</li>
<li className="ques1">{detailProduct.mcq774}</li> <li className="o">{detailProduct.o3866}</li> <li className="o">{detailProduct.o3867}</li> <li className="o">{detailProduct.o3868}</li> <li className="o">{detailProduct.o3869}</li> <li className="o">{detailProduct.o3870}</li>
<li className="ques1">{detailProduct.mcq775}</li> <li className="o">{detailProduct.o3871}</li> <li className="o">{detailProduct.o3872}</li> <li className="o">{detailProduct.o3873}</li> <li className="o">{detailProduct.o3874}</li> <li className="o">{detailProduct.o3875}</li>
<li className="ques1">{detailProduct.mcq776}</li> <li className="o">{detailProduct.o3876}</li> <li className="o">{detailProduct.o3877}</li> <li className="o">{detailProduct.o3878}</li> <li className="o">{detailProduct.o3879}</li> <li className="o">{detailProduct.o3880}</li>
<li className="ques1">{detailProduct.mcq777}</li> <li className="o">{detailProduct.o3881}</li> <li className="o">{detailProduct.o3882}</li> <li className="o">{detailProduct.o3883}</li> <li className="o">{detailProduct.o3884}</li> <li className="o">{detailProduct.o3885}</li>
<li className="ques1">{detailProduct.mcq778}</li> <li className="o">{detailProduct.o3886}</li> <li className="o">{detailProduct.o3887}</li> <li className="o">{detailProduct.o3888}</li> <li className="o">{detailProduct.o3889}</li> <li className="o">{detailProduct.o3890}</li>
<li className="ques1">{detailProduct.mcq779}</li> <li className="o">{detailProduct.o3891}</li> <li className="o">{detailProduct.o3892}</li> <li className="o">{detailProduct.o3893}</li> <li className="o">{detailProduct.o3894}</li> <li className="o">{detailProduct.o3895}</li>
<li className="ques1">{detailProduct.mcq780}</li> <li className="o">{detailProduct.o3896}</li> <li className="o">{detailProduct.o3897}</li> <li className="o">{detailProduct.o3898}</li> <li className="o">{detailProduct.o3899}</li> <li className="o">{detailProduct.o3900}</li>
 </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="J-G" /><label className="topics" for="J-G">🔻{detailProduct.t79}</label>
<ul>
<li className="ques1">{detailProduct.mcq781}</li> <li className="o">{detailProduct.o3901}</li> <li className="o">{detailProduct.o3902}</li> <li className="o">{detailProduct.o3903}</li> <li className="o">{detailProduct.o3904}</li> <li className="o">{detailProduct.o3905}</li>
<li className="ques1">{detailProduct.mcq782}</li> <li className="o">{detailProduct.o3906}</li> <li className="o">{detailProduct.o3907}</li> <li className="o">{detailProduct.o3908}</li> <li className="o">{detailProduct.o3909}</li> <li className="o">{detailProduct.o3910}</li>
<li className="ques1">{detailProduct.mcq783}</li> <li className="o">{detailProduct.o3911}</li> <li className="o">{detailProduct.o3912}</li> <li className="o">{detailProduct.o3913}</li> <li className="o">{detailProduct.o3914}</li> <li className="o">{detailProduct.o3915}</li>
<li className="ques1">{detailProduct.mcq784}</li> <li className="o">{detailProduct.o3916}</li> <li className="o">{detailProduct.o3917}</li> <li className="o">{detailProduct.o3918}</li> <li className="o">{detailProduct.o3919}</li> <li className="o">{detailProduct.o3920}</li>
<li className="ques1">{detailProduct.mcq785}</li> <li className="o">{detailProduct.o3921}</li> <li className="o">{detailProduct.o3922}</li> <li className="o">{detailProduct.o3923}</li> <li className="o">{detailProduct.o3924}</li> <li className="o">{detailProduct.o3925}</li>
<li className="ques1">{detailProduct.mcq786}</li> <li className="o">{detailProduct.o3926}</li> <li className="o">{detailProduct.o3927}</li> <li className="o">{detailProduct.o3928}</li> <li className="o">{detailProduct.o3929}</li> <li className="o">{detailProduct.o3930}</li>
<li className="ques1">{detailProduct.mcq787}</li> <li className="o">{detailProduct.o3931}</li> <li className="o">{detailProduct.o3932}</li> <li className="o">{detailProduct.o3933}</li> <li className="o">{detailProduct.o3934}</li> <li className="o">{detailProduct.o3935}</li>
<li className="ques1">{detailProduct.mcq788}</li> <li className="o">{detailProduct.o3936}</li> <li className="o">{detailProduct.o3937}</li> <li className="o">{detailProduct.o3938}</li> <li className="o">{detailProduct.o3939}</li> <li className="o">{detailProduct.o3940}</li>
<li className="ques1">{detailProduct.mcq789}</li> <li className="o">{detailProduct.o3941}</li> <li className="o">{detailProduct.o3942}</li> <li className="o">{detailProduct.o3943}</li> <li className="o">{detailProduct.o3944}</li> <li className="o">{detailProduct.o3945}</li>
<li className="ques1">{detailProduct.mcq790}</li> <li className="o">{detailProduct.o3946}</li> <li className="o">{detailProduct.o3947}</li> <li className="o">{detailProduct.o3948}</li> <li className="o">{detailProduct.o3949}</li> <li className="o">{detailProduct.o3950}</li>
  </ul></div></li></ul>

     <ul><li><div className="sub-item"><input type="checkbox" id="J-H" /><label className="topics" for="J-H">🔻{detailProduct.t80}</label>
<ul>
<li className="ques1">{detailProduct.mcq791}</li> <li className="o">{detailProduct.o3951}</li> <li className="o">{detailProduct.o3952}</li> <li className="o">{detailProduct.o3953}</li> <li className="o">{detailProduct.o3954}</li> <li className="o">{detailProduct.o3955}</li>
<li className="ques1">{detailProduct.mcq792}</li> <li className="o">{detailProduct.o3956}</li> <li className="o">{detailProduct.o3957}</li> <li className="o">{detailProduct.o3958}</li> <li className="o">{detailProduct.o3959}</li> <li className="o">{detailProduct.o3960}</li>
<li className="ques1">{detailProduct.mcq793}</li> <li className="o">{detailProduct.o3961}</li> <li className="o">{detailProduct.o3962}</li> <li className="o">{detailProduct.o3963}</li> <li className="o">{detailProduct.o3964}</li> <li className="o">{detailProduct.o3965}</li>
<li className="ques1">{detailProduct.mcq794}</li> <li className="o">{detailProduct.o3966}</li> <li className="o">{detailProduct.o3967}</li> <li className="o">{detailProduct.o3968}</li> <li className="o">{detailProduct.o3969}</li> <li className="o">{detailProduct.o3970}</li>
<li className="ques1">{detailProduct.mcq795}</li> <li className="o">{detailProduct.o3971}</li> <li className="o">{detailProduct.o3972}</li> <li className="o">{detailProduct.o3973}</li> <li className="o">{detailProduct.o3974}</li> <li className="o">{detailProduct.o3975}</li>
<li className="ques1">{detailProduct.mcq796}</li> <li className="o">{detailProduct.o3976}</li> <li className="o">{detailProduct.o3977}</li> <li className="o">{detailProduct.o3978}</li> <li className="o">{detailProduct.o3979}</li> <li className="o">{detailProduct.o3980}</li>
<li className="ques1">{detailProduct.mcq797}</li> <li className="o">{detailProduct.o3981}</li> <li className="o">{detailProduct.o3982}</li> <li className="o">{detailProduct.o3983}</li> <li className="o">{detailProduct.o3984}</li> <li className="o">{detailProduct.o3985}</li>
<li className="ques1">{detailProduct.mcq798}</li> <li className="o">{detailProduct.o3986}</li> <li className="o">{detailProduct.o3987}</li> <li className="o">{detailProduct.o3988}</li> <li className="o">{detailProduct.o3989}</li> <li className="o">{detailProduct.o3990}</li>
<li className="ques1">{detailProduct.mcq799}</li> <li className="o">{detailProduct.o3991}</li> <li className="o">{detailProduct.o3992}</li> <li className="o">{detailProduct.o3993}</li> <li className="o">{detailProduct.o3994}</li> <li className="o">{detailProduct.o3995}</li>
<li className="ques1">{detailProduct.mcq800}</li> <li className="o">{detailProduct.o3996}</li> <li className="o">{detailProduct.o3997}</li> <li className="o">{detailProduct.o3998}</li> <li className="o">{detailProduct.o3999}</li> <li className="o">{detailProduct.o4000}</li>
  </ul></div></li></ul>
     
     </div></div>



</div>

























        
                <div className="related">
              <h2>Related Subjects</h2>
              <div className="products">
                  {
                      products.map(product =>{
                          return product.category === detailProduct.category
                            ? <ProductItem key={product._id} product={product} /> : null
                      })
                  }
              </div>
        </div>

        </>
    )
}

export default DetailProduct
