import http from '../StarWarsAPI'

 const getLukeSkywalker = () => {
    return http.get('/people/1')
}


export default {
    getLukeSkywalker 
    
}
    
    
