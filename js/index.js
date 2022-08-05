function showsemnha(){
    const eye = document.getElementById('eye');
    const eyeslash = document.getElementById('eye-slash');
    const fpassowed = document.getElementById('fileld-passwoed');
    
    if (eye.style.display === 'none') { 
        eye.style.display = 'block';
        eyeslash.style.display = 'none';
        fpassowed.type = 'text';

        
    } else { eye.style.display = 'none';
    eyeslash.style.display = 'block';
    fpassowed.type = 'passowed';
    }
        
};

document.getElementById('btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert('LOGADO');   
});