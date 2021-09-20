import React from 'react'
import {ReactComponent as Plus} from '../../../assets/icon-plus.svg'
import {useDispatch, useSelector} from 'react-redux'

function Button({description, mode, type, clicked, invoiceNumber, specialAlign}) {
    const fromStreet = useSelector((state) => state.inputFieldsSlice.fromStreet)
    const fromCity= useSelector((state) => state.inputFieldsSlice.fromCity)
    const fromZip= useSelector((state) => state.inputFieldsSlice.fromZip)
    const fromCountry= useSelector((state) => state.inputFieldsSlice.fromCountry)
    const toName= useSelector((state) => state.inputFieldsSlice.toName)
    const toEmail= useSelector((state) => state.inputFieldsSlice.toEmail)
    const toStreet = useSelector((state) => state.inputFieldsSlice.toStreet)
    const toCity = useSelector((state) => state.inputFieldsSlice.toCity)
    const toZip = useSelector((state) => state.inputFieldsSlice.toZip)
    const toCountry = useSelector((state) => state.inputFieldsSlice.toCountry)
    const toProject = useSelector((state) => state.inputFieldsSlice.toProject)
    const itemRows = useSelector((state) => state.itemListSlice.rows)
    const itemArray = useSelector((state)=> state.itemListSlice.items)
    const isoDate = useSelector((state) => state.dateSlice.ISO)
    const dueIn = useSelector((state)=> state.dateSlice.dueIn) 
    const year = useSelector((state)=> state.dateSlice.year) 
    const month = useSelector((state)=> state.dateSlice.month) 
    const day = useSelector((state)=> state.dateSlice.day) 
    const generatedInvoiceNumber = useSelector ((state)=> state.invoiceNumberSlice.invoiceNumber)
    const [hover, setHover] = React.useState(false)
    const [svg, setSVG] = React.useState(null)
    const dispatch = useDispatch()
    const targetSVG = React.useCallback((node) => {
        if(node) {
            node.setAttribute("fill", "rgb(126, 136, 195)")
            setSVG(()=> node)
        }
    })

    function returnSpecialProperty(specialProperty) {
        if(specialProperty !== undefined) {
            return ({
                property: specialProperty.property,
                value: specialProperty.value,
        })
        } else {
            return ({
             property: "marginLeft",
             value: null
            }) 
         }
    }

    function returnBillStatus(e) {
        if(e.target.innerText === "Save as Draft") {
            return "DRAFT"
        } else if(e.target.innerText === "Save & Send") {
            return "PENDING"
        }
    }

    function handleClick(e) {
        console.log(e.target.innerText)
        if(e.target.innerText === "Save as Draft" || e.target.innerText === "Save & Send") {
            return clicked({
                invoiceNumber: generatedInvoiceNumber,
                fromStreet: fromStreet,
                fromCity: fromCity,
                fromZip: fromZip,
                fromCountry: fromCountry,
                toName: toName,
                toEmail: toEmail,
                toStreet: toStreet,
                toCity: toCity,
                toZip: toZip,
                toCountry: toCountry,
                toProject: toProject,
                itemArray: itemArray,
                isoDate: isoDate,
                dueIn: dueIn,
                year: year,
                month: month,
                day: day,
                status: returnBillStatus(e) 
                
            })
        } else {
            const payload ={
                type: e.target.innerText,
                invoice: invoiceNumber
            }
            dispatch(clicked(payload))

        }
        
    }

    
    function returnButtonStyling(typeProp) {
        if(typeProp === 1) {
            return {
                width:"150px",
                bgColor: "#7C5DFA",
                bgColorHover: "#9277FF",
                txtColor: "#FFFFFF",
                txtColorHover: mode === "light" ? "#FFFFFF" : "#FFFFFF",
                specialAlign: specialAlign
                

            }
        } else if (typeProp === 2) {
            return {
                width:"131px",
                bgColor: "#7C5DFA",
                bgColorHover: "#9277FF",
                txtColor: "#FFFFFF",
                txtColorHover: mode === "light" ? "#FFFFFF" : "#FFFFFF",
                specialAlign: specialAlign
            }
        } else if (typeProp === 3) {
            return {
                width:"73px",
                bgColor: mode === "light" ? "#DFE3FA" : "#252945",
                bgColorHover: mode === "light" ? "#F9FAFE" : "#DFE3FA",
                txtColor: mode === "light" ? "#7E88C3" : "#DFE3FA",
                txtColorHover: mode === "light" ? "#7E88C3" : "#7E88C3",
                specialAlign: specialAlign
        }
        } else if (typeProp === 4) {
            return {
                width:"133px",
                bgColor: "#373B53",
                bgColorHover: mode === "light" ? "#0C0E16" : "#1E2139",
                txtColor: mode === "light" ? "#888EB0" : "#DFE3FA",
                txtColorHover: mode === "light" ? "#888EB0" : "#DFE3FA",
                specialAlign: specialAlign

            }
        } else if (typeProp === 5) {
            return {
                width:"89px",
                bgColor: "#EC5757",
                bgColorHover: mode === "light" ? "#FF9797" : "#FF9797",
                txtColor: "#FFFFFF",
                txtColorHover: mode === "light" ? "#FFFFFF" : "#FFFFFF",
                specialAlign: specialAlign

        }
        } else if (typeProp === 6) {
            return {
                width:"100%",
                bgColor: "#F9FAFE",
                bgColorHover: mode === "light" ? "#DFE3FA" : "#DFE3FA",
                txtColor: "#7E88C3",
                txtColorHover: mode === "light" ? "#7E88C3" : "#7E88C3",
                specialAlign: specialAlign
        } 
        } else {
            return {
               width:"150px",
               bgColor: "white",
               txtColor: "blue"
           }
        } 
    }
    
    const circleStyle = {
        borderRadius: "50px",
        backgroundColor: "white",
        width: "30px",
        height: "30px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    
    }

    const descriptionStyle = {
        fontFamily: `'Spartan', sans-serif`,
        fontSize: "12px",
        fontWeight: "bold",
        marginLeft: type === 6 ? "10px" : "none",
        marginTop: type === 6 ? "3px" : "none"
    }


    const buttonStyle = {
        backgroundColor: hover === false ? returnButtonStyling(type).bgColor : returnButtonStyling(type).bgColorHover,
        color: hover === false ? returnButtonStyling(type).txtColor : returnButtonStyling(type).txtColorHover,
        width: returnButtonStyling(type).width,
        height: "48px",
        borderRadius: "30px",
        border: "none",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: type === 6 ? "center" : "space-around",
        // [specialAlign.property]: specialAlign.value
        [returnSpecialProperty(specialAlign).property]: returnSpecialProperty(specialAlign).value
    }
    
    

    function returnButton(typeProp) {
        if(typeProp === 1) {
            return (
                <button onClick={(e) => handleClick(e)} onMouseOver={() => setHover(() => true)} onMouseOut={() => setHover(() => false)}  style={buttonStyle}>
                    <div style={circleStyle}><Plus /></div>
                    <span style={descriptionStyle}>{description}</span>
                </button>
            )
        } else if (typeProp === 6) {
            return (
                <button onClick={(e) => handleClick(e)} onMouseOver={() => setHover(() => true)} onMouseOut={() => setHover(() => false)}  style={buttonStyle}>
                    <Plus ref={targetSVG} /> <span style={descriptionStyle}>{description}</span>
                </button>
            )
        } else {
            return (
                <button onClick={(e) => handleClick(e)} onMouseOver={() => setHover(() => true)} onMouseOut={() => setHover(() => false)}  style={buttonStyle}>
                    <span style={descriptionStyle}>{description}</span>
                </button>
            )
        }
    }

    return returnButton(type)
}

export default Button;