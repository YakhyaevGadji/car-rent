const exitProfile = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
    location.reload();
}

export default exitProfile;