function Destructing() {
    const person = { name: "John", age: 25 };
    // it pulls the value of index of the array and assigns it to the variable
    const { name, age } = person;
    const numbers = ["one", "two", "three"];
    const [ first, second, third ] = numbers;
    return (
      <div>
        <h2>Destructing</h2>
        <h3>Object Destructing</h3>
        {/* &#123 = {squireely bracket} &#125; */}
        const &#123; name, age &#125; =
              &#123; name: "John", age: 25 &#125;<br /><br />
        name = {name}<br />
        age = {age}
        <h3>Array Destructing</h3>
        const [first, second, third] = ["one","two","three"]<br/><br/>
        first = {first}<br />
        second = {second}<br />
        third = {third}
      </div>
    );
   }
   export default Destructing;