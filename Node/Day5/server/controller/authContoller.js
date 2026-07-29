export const register = async(req,res)=>{

      let array = []
    try{


  

        array.push(req.body)

        const takeData = array.filter(e =>e.name === "yogitha")


        console.log(takeData)

        return res.status(200).json({array})



    }catch(error){

        console.log('error',error)
    
    }
}

