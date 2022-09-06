const [posts, set Posts] = useState([])
useEffect(() = {
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(res {
console.log(res)
})
.catch
})