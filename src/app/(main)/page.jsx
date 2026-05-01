
import { redirect } from "next/navigation";


const HomePage = async () => {
  
const defaultId = '01'
  return (
    redirect(`/category/${defaultId}`)
  )
};

export default HomePage;
