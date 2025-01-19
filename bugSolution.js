```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This effect now runs only once after the initial render
    console.log('Component mounted'); // runs only once after initial render
  }, []);

  return <div>Count: {count}</div>;
}
```