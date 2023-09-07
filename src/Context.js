import { React , useState , useContext , createContext} from 'react';



const Appcontext = createContext();
const AppProvider = ({children}) => {

    
    const [check , setCheck] = useState(false);
    const [form , setForm] = useState({
    name: '',
    amount: '',
    time: '',
    description: '',
    });
    const num = form.amount;
    const [balance , setBalance] = useState(0);
    const [detail , setDetail] = useState("");
    const [deleteIndex , setDeleteIndex] = useState(null);
    const [data , setData] = useState([]);
    // console.log(balance); 
     

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({
        ...prevData,  
          [name]: value
        }))
    }
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();
     
    // ADD Data 
    const addData = () =>{
    setData([{
        name:form.name,
        amount:form.amount,
        check:check,
        time:formattedTime,
        description:form.description,
    }, ...data])
    setForm({name: "" , amount: "" , time: "", description: "", })
    setCheck(false);
    setBalance(+balance + + num);
    } 

    const addAgain = (index) => {
        const item = data[index];
          if (!isNaN(item.amount)) {
            setBalance((prevBalance) => +prevBalance + + item.amount);
            setData((prevData) => [{
              name:item.name, 
              description:item.description,
              check:item.check,
              amount:item.amount,
              time:formattedTime,
            }, ...prevData]);
          }
    }

    const confirmDelete = () => {
        const updatedData = data.filter((item, id) => id !== deleteIndex);
        setData(updatedData);
        setDeleteIndex(null); // Reset deleteIndex 
        
    }
 
    return <Appcontext.Provider value={{data, setData, confirmDelete, setDeleteIndex, 
      addData,  handleChange, form , check, setCheck, balance, addAgain, detail, setDetail}}>
        {children}
    </Appcontext.Provider>
}

const GlobalContext = () => {
    return useContext(Appcontext);
}

export {GlobalContext , AppProvider}