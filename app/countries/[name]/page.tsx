import Countrydata from "@/app/components/Countrydata";

export default function Countryname({params}:{params:{name:string}}){
   
    return(
        <Countrydata name={params.name} />
    )
}