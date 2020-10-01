import React, {useState} from 'react'
// import Order from "./pick/Order/Order";
import Data from "./pick/Data.json";
import Text from "./pick/Input/Text";
import Button from "./pick/Input/Button";
import Order from './pick/Order/Order';
import Item from "../src/pick/Item/Item";

const App = () => {
    // function fnc(ord){console.log(ord.o[0].l)}
    const OrderApp = () => {
        const [state, setstate] = useState({
            cc: "",
            cdc: "",
            ono: "",
            ot: "",

        })

        const handle = (e) => {
            const {value, name} = e.target; 
                     setstate((preValue)=>{
                        // console.log(preValue)
                        return{
                            ...preValue,
                            [name]: value,
                        }
                     })}

        const ListofItems = () => {
        setstate({status:true})
        return ( <> <Fnc />  </> ) }

        const Fnc = () =>{
            const cc = []; const cdc = []; const ono = []; const ot = []; const od = []; const ref = [];
            const psn = []; const exp = []; const aq = []; const loc = []; 
            const uom = []; const ic = []; const aic = []; const descr = []; const r_qty = []; const upc = []; 
            //  console.log(r_qty)
            return(
                    <>
                    {
                        <>
                        <Order cc={cc} cdc={cdc} ref={ref} ono={ono} rqty={r_qty} ic={ic} aic={aic} descr={descr} r_qty={r_qty} upc={upc} uom={uom}
                        /> 
                        <button >Print</button>
                        </>
                    }
                    {
                            Data.map( (post) => {
                                cc.push(post.cc, <br/>)
                                cdc.push(post.cdc, <br/>)
                                ono.push(post.ono, <br/>)
                                ot.push(post.od, <br/>)
                                od.push(post.ot, <br/>)
                                ref.push(post.ref, <br/>)
                                        cc.push(post.cc, <br/>)
                                        cdc.push(post.cdc, <br/>)
                                        ref.push(post.ref, <br/>)
                                        ono.push(post.ono, <br/>)
                                        for (let i = 0; i < post.o.length; i++) {
                                            r_qty.push(post.o[i].r_qty, <br/>)
                                            ic.push(post.o[i].ic, <br/>)
                                            aic.push(post.o[i].aic, <br/>)
                                            descr.push(post.o[i].descr, <br/>)
                                            upc.push(post.o[i].upc, <br/>)
                                    for (let j = 0; j < post.o[i].l.length; j++) { // console.log(post.o[0].l[j].psn, " from j");
                                        psn.push(post.o[i].l[j].psn, <br/>)
                                        exp.push(post.o[i].l[j].exp, <br/>)
                                        aq.push(post.o[i].l[j].aq, <br/>)
                                        loc.push(post.o[i].l[j].loc, <br/>)
                                        uom.push(post.o[i].l[j].uom, <br/>)
                                    } // console.log(post.o[0].l.length, "Table i");
                                }
                                return(
                                    <>
                                    <table>
                                    <thead>
                                    <tr>
                                        <th>UoM</th>
                                        <th>Location</th>
                                        <th>Plt Sl No</th>
                                        <th>Exp Date</th>
                                        <th>Avl Qty</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{uom}</td>
                                        <td>{loc}</td>
                                        <td>{psn}</td>
                                        <td>{exp}</td>
                                        <td>{aq}</td>
                                  </tr>
                                  </tbody>
                                  </table>
                                 </> )} )}</>)}

        return(
        <>
           <Text type="text" placeholder="Customer Code" name="cc" value={state.cc} onChange={handle} />
           <Text type="text" placeholder="Division Code" name="cdc" value={state.cdc} onChange={handle}/>
           <Text type="number" placeholder="Order Number" name="ono" value={state.ono} onChange={handle}/>
           <Text type="text" placeholder="Order Type" name="ot" value={state.ot} onChange={handle}/>
           <Button onClick={ ()=>{
            //    console.log(Data[0].o[0].ic)
               if(state.cc == Data[0].cc || state.cdc == Data[0].cdc || state.ono == Data[0].ono || state.ot == Data[0].ot){
                ListofItems()
               }else{
                   alert('Enter The Required Fields')
               }
           } } />
           <br/>
           <h1>{state.status && <Fnc />}</h1>

        </>
        )
    }
    const Items = () =>{
        const [state, setstate] = useState({
            cc: "",
            cdc: "",
            ic: "",
            rqty: "",
            uom: "",
            status: false
        })

        const handle = (e) => {
            
            const {value, name} = e.target; 
                     setstate((preValue)=>{
                        // console.log(preValue)
                        return{
                            ...preValue,
                            [name]: value,
                        }
                     })}

        const ListofItems = () => {
            setstate({status:true})
            return (
            <>
            <Fnc /> 
            </>
            )
        }

        const Fnc = () =>{
            const cc = []; const cdc = []; const ono = []; const ot = []; const od = []; const ref = [];
            const psn = []; const exp = []; const aq = []; const loc = []; 
            const uom = []; const ic = []; const aic = []; const descr = []; const r_qty = []; const upc = []; 
            return(
                    <> {
                        <>
                        <Item rqty={r_qty} ic={ic} aic={aic} descr={descr} r_qty={r_qty} upc={upc} uom={uom}
                        /> 
                        <button>Print</button>
                        </>
                        }
                        {
                            Data.map( (post) => { 
                                cc.push(post.cc, <br/>)
                                cdc.push(post.cdc, <br/>)
                                ono.push(post.ono, <br/>)
                                ot.push(post.od, <br/>)
                                od.push(post.ot, <br/>)
                                ref.push(post.ref, <br/>)
                                for (let i = 0; i < post.o.length; i++) {
                                    r_qty.push(post.o[i].r_qty, <br/>)
                                    ic.push(post.o[i].ic, <br/>)
                                    aic.push(post.o[i].aic, <br/>)
                                    descr.push(post.o[i].descr, <br/>)
                                    upc.push(post.o[i].upc, <br/>)
                                    for (let j = 0; j < post.o[i].l.length; j++) { // console.log(post.o[0].l[j].psn, " from j");
                                        psn.push(post.o[i].l[j].psn, <br/>)
                                        exp.push(post.o[i].l[j].exp, <br/>)
                                        aq.push(post.o[i].l[j].aq, <br/>)
                                        loc.push(post.o[i].l[j].loc, <br/>)
                                        uom.push(post.o[i].l[j].uom, <br/>)
                                    } // console.log(post.o[0].l.length, "Table i");
                                }
                                return(
                                    <>
                                    <table>
                                    <thead>
                                    <tr>
                                        <th>UoM</th>
                                        <th>Location</th>
                                        <th>Plt Sl No</th>
                                        <th>Exp Date</th>
                                        <th>Avl Qty</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{uom}</td>
                                        <td>{loc}</td>
                                        <td>{psn}</td>
                                        <td>{exp}</td>
                                        <td>{aq}</td>
                                  </tr>
                                  </tbody>
                                  </table>
                                 </> )} )}</>)}

        return(
        <>
           <Text type="text" placeholder="Customer Code" name="cc" value={state.cc} onChange={handle} />
           <Text type="text" placeholder="Division Code" name="cdc" value={state.cdc} onChange={handle}/>
           <Text type="number" placeholder="Item Code" name="ic" value={state.ic} onChange={handle}/>
           <Text type="text" placeholder="Required Qty" name="rqty" value={state.rqty} onChange={handle}/>
           <Text type="text" placeholder="UOM" name="uom" value={state.uom} onChange={handle}/>
           <Button onClick={ ()=>{
            //    console.log(Data[0].o[0].ic)
               if(state.cc == Data[0].cc || state.cdc == Data[0].cdc || state.ic == Data[0].o[0].ic || state.rqty == Data[0].o[0].r_qty || state.uom == Data[0].o[0].uom){
                ListofItems()
               }else{
                   alert('Enter The Required Fields')
               }
           } } />
           <br/>
            <h1>{state.status && <Fnc />}</h1>
             </>
        ) }
    
    return (
        <>
            <OrderApp />
        </>
    )
}
export default App