import { countriesdata } from "@/app/data"

export default function Countryname({params}:{params:{name:string}}){
    let data = countriesdata.findIndex(name => name.name===params.name)
    const finaldata = countriesdata[data]
    if(data==-1){
        return(
            <h1>Country Not Found</h1>
        )
    }
    return(
        <>
        {finaldata && <div className="p-3 flex flex-col items-center justify-center text-xl ">
            <h1>Country Name: <span className="capitalize text-green-400 font-bold "> {finaldata.name}</span></h1>
            <h1>Population: {finaldata.population}</h1>
            <h1>Capital: <span className="capitalize"> {finaldata.capital}</span> </h1>
        </div>}
        </>
    )
}