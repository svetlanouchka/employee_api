function EmployeeCard({ employee }) {
    return (
        <figure className='DisplayEmployee'>
            <img src={employee.picture.medium} alt={employee.name.first} />
            <figcaption>
                <strong>{employee.name.first} {employee.name.last}</strong>
                {employee.email}
            </figcaption>
        </figure>
    );
}


export default EmployeeCard;