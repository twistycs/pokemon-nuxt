export default function ({app,redirect}) {
        const cookieToken = app.$cookies.get('token')
        console.log(cookieToken)
        if(typeof cookieToken === 'undefined'){
                redirect("/login")
        }
}
