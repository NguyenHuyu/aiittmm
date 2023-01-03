export const fetchUser = () =>{
    const userinfo = localStorage.getItem('user') !== 'undefined' 
    ? JSON.parse(localStorage.getItem('user'))
    : localStorage.clear()
    return userinfo
}

// export const fetchUserRight =  () =>{
//     const userright = localStorage.getItem('user') !== 'undefined' 
//     ? JSON.parse(localStorage.getItem('user'))
//     : localStorage.clear()
//     return userright

// }