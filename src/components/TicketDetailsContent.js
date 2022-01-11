const TicketDetailsContent = ({
    dateCreated, 
    summary, 
    description, 
    customerName, 
    phone, 
    customerEmail,
    category,
    subCategory
 }) => {
    return ( 
        <div className="td-content-bx">

        <div className="td-sub-bx">
            <div>
                <h4>Date Created</h4>
                <p>{dateCreated}</p>
            </div>
            <div>
                <h4>Summary</h4>
                <p>{summary}</p>
            </div>
            <div>
                <h4>Description</h4>
                <p>{description}</p>
            </div>
        </div>

        <div className="td-sub-bx">
            <div>
                <h4>Customer Name</h4>
                <p>{customerName}</p>
            </div>
            <div>
                <h4>Phone</h4>
                <p>{phone}</p>
            </div>
            <div>
                <h4>Customer Email</h4>
                <p>{customerEmail}</p>
            </div>

        </div>

        <div className="td-sub-bx">
            <div>
                <h4>Category</h4>
                <p>{category}</p>
            </div>
            <div>
                <h4>Sub-category</h4>
                <p>{subCategory}</p>
            </div>
            <div>
               
            </div>

        </div>

    </div>
     );
}
 
export default TicketDetailsContent;