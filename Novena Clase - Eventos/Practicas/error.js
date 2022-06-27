
try{
    throw console.error('error');
}catch (e){
    console.log('tenemos un error aca: ' + e)
}finally{
    console.log('')
}