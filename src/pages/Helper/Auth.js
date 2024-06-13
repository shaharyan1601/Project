import axios from 'axios';


export async function loginCheck (payload){
    try {
        const {data} = await axios.get(`/users/${payload.id}`)
        console.log("data",data);
        return data.data
    } catch (error) {
        console.log(error)
    }
    
}

export async function checkLevel(args){
    
   
    
    try {

        if(args==9)
        {
            return 'Manager'
        }
        else if(args==10)
        {
            return 'HR'
        }
        else if (args===11)
        {
            return 'Employee'
        }
    } catch (error) {
        return error
    }
}

export const checkAccess=async()=>{
    let login_type = await checkCookies('login_type');
    if(login_type==9)
        {
            let login_check= await checkCookies('jwt');
            if(login_check)
            {
                return 'Manager'
            }
            else
            {
                return null
            }
           
        }
        else if(login_type==10)
        {
            let login_check= await checkCookies('jwt');
            if(login_check)
            {
                return 'HR'
            }
            else
            {
                return null
            }
        }
        else if (login_type===11)
        {
            let login_check= await checkCookies('jwt');
            if(login_check)
            {
                return 'Employee'
            }
            else
            {
                return null
            }
        }
        else
        {
            return null
        }
}



export const checkCookies=async(name)=>{
    try {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match[2]
    } catch (error) {
        return null
    }
    
}