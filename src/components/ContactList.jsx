import style from "../App.module.css";

function ContactList() {
  return (
    <div className='mt-5 mx-3 px-5'>
      <table className={`table table-hover text-white ${style.transparentTable} `}>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'>Name</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>E-Mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>1234567</td>
            <td>mark@mark.com</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>123456787</td>
            <td>jacob@jacob.com</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Lance</td>
            <td>123456787</td>
            <td>lance@lance.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
