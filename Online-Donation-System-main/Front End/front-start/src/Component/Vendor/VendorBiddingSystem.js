import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom";

import VendorService from "../Services/VendorService";
import EmployeeService from "../Services/EmployeeService";

const VendorBiddingSystem=()=>{
    const [form1, setform1] = useState(false);
    const [form2, setform2] = useState(false);
    const [form3, setform3] = useState(false);
    const [form4, setform4] = useState(false);
    useEffect(() => {
        if(!localStorage.getItem('ven')){
            history.push("/VendorSignIn");
        }
        EmployeeService.GetBalance().then((resp) => {
            alert("hello"+resp.data);
            let bal=resp.data-30000;
            let book=.3*bal;
            let cloth=.3*bal;
            let toy=.2*bal;
            let cycle=.2*bal;
            if(cycle>50000){
             alert(resp.data);
             setform4(true);
            }
            else if(toy>20000){
             alert(resp.data);
             setform3(true);
            }
            else if(cloth>10000){
             alert(resp.data);
             setform2(true);
            }
           else if(book>5000){
            alert(resp.data);
            setform1(true);
           }
        });
    }, []);

    const [vendorob,setvendorob]=useState({});



    const [bookForm,setBookForm]=useState({});
    var history=useHistory();

    const Change1=(event)=>{
        var {name,value}=event.target
        setBookForm({...bookForm,[name]:value});
    }

    const funBook=(event)=>{
        VendorService.DoBidding(bookForm,).then((response)=>{
         console.log(response.data);
        });
    }
    const [shirtForm,setShirtForm]=useState({});
    const Change2=(event)=>{
        var {name,value}=event.target
        setShirtForm({...shirtForm,[name]:value});
    }

    const funShirt=(event)=>{
        VendorService.DoBidding(shirtForm).then((response)=>{
         console.log(response.data);
        });
    }
    const [toyForm,setToyForm]=useState({});
    const Change3=(event)=>{
        var {name,value}=event.target
        setToyForm({...toyForm,[name]:value});
    }

    const funToy=(event)=>{
        VendorService.DoBidding(toyForm).then((response)=>{
         console.log(response.data);
        });
    }   
     
    const [cycleForm,setCycleForm]=useState({});
    const Change4=(event)=>{
        var {name,value}=event.target
        setCycleForm({...cycleForm,[name]:value});
    }

    const funCycle=(event)=>{
        VendorService.DoBidding(cycleForm).then((response)=>{
         console.log(response.data);
        });
    }
    



    return (
        <div>
          <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
          
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
            
            <body id="page-top">

                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/* <!-- Sidebar --> */}
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                        {/* <!-- Sidebar - Brand --> */}
                        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/Employee">
                        
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">Bidding DashBoard</div>
                        
                        </Link>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/* <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <Link to="/Employee" className="nav-link">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span> Dashboard</span></Link>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/* <!-- Heading --> */}
                        <div className="sidebar-heading">
                            Interface
                        </div>

                        {/* <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseDonor"
                                aria-expanded="true" aria-controls="collapseDonor">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Tables</span>
                            </a>
                            <div id="collapseDonor" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Components:</h6>
                                    
                                    <Link className="collapse-item" to="/VendorBidding">Vendor Bidding table</Link>
                                    <Link className="collapse-item" to="/VendorBiddingSystem">Vendor available bids table</Link>
                                </div>
                            </div>
                        </li>
                        <hr className="sidebar-divider" />

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>Utilities</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Utilities:</h6>
                                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                    <a className="collapse-item" href="utilities-other.html">Other</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Divider --> */}
                        {/* <hr className="sidebar-divider" /> */}



                        {/* <!-- Nav Item - Tables --> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="tables.html">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Tables</span></a>
                        </li> */}

                        {/* <!-- Divider --> */}
                        {/* <hr className="sidebar-divider d-none d-md-block" /> */}

                        {/* <!-- Sidebar Toggler (Sidebar) --> */}
                        <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle"></button>
                        </div>

                    </ul>
                    {/* <!-- End of Sidebar --> */}

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                            {/* <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/* <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                    <i className="fa fa-bars"></i>
                                </button>

                                {/* <!-- Topbar Search --> */}
                                <form
                                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                            aria-label="Search" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                {/* <!-- Topbar Navbar --> */}
                                <ul className="navbar-nav ml-auto">

                                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                    <li className="nav-item dropdown no-arrow d-sm-none">
                                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-search fa-fw"></i>
                                        </a>
                                        {/* <!-- Dropdown - Messages --> */}
                                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                            aria-labelledby="searchDropdown">
                                            <form className="form-inline mr-auto w-100 navbar-search">
                                                <div className="input-group">
                                                    <input type="text" className="form-control bg-light border-0 small"
                                                        placeholder="Search for..." aria-label="Search"
                                                        aria-describedby="basic-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" type="button">
                                                            <i className="fas fa-search fa-sm"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>

                                    {/* <!-- Nav Item - Alerts --> */}
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-bell fa-fw"></i>
                                            {/* <!-- Counter - Alerts --> */}
                                            <span className="badge badge-danger badge-counter">3+</span>
                                        </a>
                                        {/* <!-- Dropdown - Alerts --> */}
                                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="alertsDropdown">
                                            <h6 className="dropdown-header">
                                                Alerts Center
                                            </h6>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <div className="mr-3">
                                                    <div className="icon-circle bg-primary">
                                                        <i className="fas fa-file-alt text-white"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="small text-gray-500">December 12, 2019</div>
                                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                                </div>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <div className="mr-3">
                                                    <div className="icon-circle bg-success">
                                                        <i className="fas fa-donate text-white"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="small text-gray-500">December 7, 2019</div>
                                                    $290.29 has been deposited into your account!
                                                </div>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <div className="mr-3">
                                                    <div className="icon-circle bg-warning">
                                                        <i className="fas fa-exclamation-triangle text-white"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="small text-gray-500">December 2, 2019</div>
                                                    Spending Alert: We've noticed unusually high spending for your account.
                                                </div>
                                            </a>
                                            <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                        </div>
                                    </li>

                                    {/* <!-- Nav Item - Messages --> */}
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-envelope fa-fw"></i>
                                            {/* <!-- Counter - Messages --> */}
                                            <span className="badge badge-danger badge-counter">7</span>
                                        </a>
                                        {/* <!-- Dropdown - Messages --> */}
                                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="messagesDropdown">
                                            <h6 className="dropdown-header">
                                                Message Center
                                            </h6>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <div className="dropdown-list-image mr-3">
                                                    <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                        alt="..." />
                                                    <div className="status-indicator bg-success"></div>
                                                </div>
                                                <div className="font-weight-bold">
                                                    <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                        problem I've been having.</div>
                                                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <div className="dropdown-list-image mr-3">
                                                    <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                        alt="..." />
                                                    <div className="status-indicator"></div>
                                                </div>
                                                <div>
                                                    <div className="text-truncate">I have the photos that you ordered last month, how
                                                        would you like them sent to you?</div>
                                                    <div className="small text-gray-500">Jae Chun · 1d</div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <div className="dropdown-list-image mr-3">
                                                    <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                                        alt="..." />
                                                    <div className="status-indicator bg-warning"></div>
                                                </div>
                                                <div>
                                                    <div className="text-truncate">Last month's report looks great, I am very happy with
                                                        the progress so far, keep up the good work!</div>
                                                    <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <div className="dropdown-list-image mr-3">
                                                    <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                        alt="..." />
                                                    <div className="status-indicator bg-success"></div>
                                                </div>
                                                <div>
                                                    <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                        told me that people say this to all dogs, even if they aren't good...</div>
                                                    <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                        </div>
                                    </li>

                                    <div className="topbar-divider d-none d-sm-block"></div>

                                    {/* <!-- Nav Item - User Information --> */}
                                    <li className="nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Mohak & Rushabh</span>
                                            <img className="img-profile rounded-circle"
                                                src="img/undraw_profile.svg" />
                                        </a>
                                        {/* <!-- Dropdown - User Information --> */}
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="userDropdown">
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Profile
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Settings
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Logout
                                            </a>
                                        </div>
                                    </li>

                                </ul>

                            </nav>
                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                                {/* <!-- Page Heading --> */}
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                                </div>


                  {form1?(<div>
                    <form>
    <table>
        <tr>
            <th>
                <h3> Enter Price per 100 pages Notebook</h3>
                </th>
                <td>
                <input type="number" class="form-control" id="lowPriceNotebook" name="lowPriceNotebook" value={bookForm.lowPriceNotebook} onChange={Change1} autoFocus placeholder="Notebook Price"/>
                </td>
            <td>
            <button type="button" class="btn btn-black"  id="btn" name="btn1" onClick={funBook}>Bid</button>
            </td>
        </tr>
        </table></form>
    </div>):""}




    {form2?(<div>
                    <form>
    <table>
        <tr>
            <th>
                <h3> Enter Price per 100 pages Notebook</h3>
                </th>
                <td>
                <input type="number" class="form-control" id="lowPriceNotebook" name="lowPriceNotebook" value={bookForm.lowPriceNotebook} onChange={Change1} autoFocus placeholder="Notebook Price"/>
                </td>
                <td>
            <button type="button" class="btn btn-black"  id="btn" name="btn1" onClick={funBook}>Bid</button>
            </td>
                </tr>
                
                
                <tr><th>
                <h3> Enter Price per 30cm T-Shirt</h3></th>
                <td>
                <input type="number" class="form-control" id="lowPriceCloth" name="lowPriceCloth" value={shirtForm.lowPriceCloth} onChange={Change2} autoFocus placeholder="Cloth Price"/>
                </td>
            <td>
            <button type="button" class="btn btn-black"  id="btn" name="btn1" onClick={funShirt}>Bid</button>
            </td>
        </tr>
        </table></form>
    </div>):""}





    {form3?(<div>
                    <form>
    <table>
        <tr>
            <th>
                <h3> Enter Price per 100 pages Notebook</h3>
                </th>
                <td>
                <input type="number" class="form-control" id="lowPriceNotebook" name="lowPriceNotebook" value={bookForm.lowPriceNotebook} onChange={Change1} autoFocus placeholder="Notebook Price"/>
                </td>
                <td>
            <button type="button" class="btn btn-black"  id="btn" name="btn1" onClick={funBook}>Bid</button>
            </td>
                </tr>
                
                
                <tr><th>
                <h3> Enter Price per 30cm T-Shirt</h3></th>
                <td>
                <input type="number" class="form-control" id="lowPriceCloth" name="lowPriceCloth" value={shirtForm.lowPriceCloth} onChange={Change2} autoFocus placeholder="Cloth Price"/>
                </td>
            <td>
            <button type="button" class="btn btn-black"  id="btn" name="btn1" onClick={funShirt}>Bid</button>
            </td>
        </tr>
             
             
                <tr><th>
                <h3> Enter Price per 32cm Toys</h3></th>
                <td>
                <input type="number" class="form-control" id="lowPriceToy" name="lowPriceToy" value={toyForm.lowPriceToy} onChange={Change3} autoFocus placeholder="Toy Price"/>
                </td>
            <td>
            <button type="button" class="btn btn-black"  id="btn" name="btn1" onClick={funToy}>Bid</button>
            </td>
        </tr>
        </table></form>
    </div>):""}






    {form4?(<div>
                    <form>
    <table>
        <tr>
            <th>
                <h3> Enter Price per 100 pages Notebook</h3>
                </th>
                <td>
                <input type="number" class="form-control" id="lowPriceNotebook" name="lowPriceNotebook" value={bookForm.lowPriceNotebook} onChange={Change1} autoFocus placeholder="Notebook Price"/>
                </td>
                <td>
            <button type="button" class="btn btn-black"  id="btn" name="btn1" onClick={funBook}>Bid</button>
            </td>
                </tr></table></form>
                
                <form><table>
                <tr><th>
                <h3> Enter Price per 30cm T-Shirt</h3></th>
                <td>
                <input type="number" class="form-control" id="lowPriceCloth" name="lowPriceCloth" value={shirtForm.lowPriceCloth} onChange={Change2} autoFocus placeholder="Cloth Price"/>
                </td>
            <td>
            <button type="button" class="btn btn-black"  id="btn" name="btn1" onClick={funShirt}>Bid</button>
            </td>
        </tr></table></form>
             
        <form><table>
                <tr><th>
                <h3> Enter Price per 32cm Toys</h3></th>
                <td>
                <input type="number" class="form-control" id="lowPriceToy" name="lowPriceToy" value={toyForm.lowPriceToy} onChange={Change3} autoFocus placeholder="Toy Price"/>
                </td>
            <td>
            <button type="button" class="btn btn-black"  id="btn" name="btn1" onClick={funToy}>Bid</button>
            </td>
        </tr>
        </table></form>
             
             
        <form><table>
                <tr><th>
                <h3> Enter Price per kids Cycle</h3></th>
                <td>
                <input type="number" class="form-control" id="lowPriceCycle" name="lowPriceCycle" value={cycleForm.lowPriceCycle} onChange={Change4} autoFocus placeholder="Cycle Price"/>
                </td>
            <td>
            <button type="button" class="btn btn-black"  id="btn" name="btn1" onClick={funCycle}>Bid</button>
            </td>
        </tr>
        </table></form>
    </div>):""}
                  
               





                                
                                {/* <!-- Footer --> */}
                                <footer className="sticky-footer bg-white">
                                    <div className="container my-auto">
                                        <div className="copyright text-center my-auto">
                                            <span>Copyright &copy; Your Website 2023</span>
                                        </div>
                                    </div>
                                </footer>
                                {/* <!-- End of Footer --> */}

                            </div>
                            {/* <!-- End of Content Wrapper --> */}

                        </div>
                        {/* <!-- End of Page Wrapper --> */}

                        {/* <!-- Scroll to Top Button--> */}
                        <a className="scroll-to-top rounded" href="#page-top">
                            <i className="fas fa-angle-up"></i>
                        </a>

                        {/* <!-- Logout Modal--> */}
                        <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                                    <div className="modal-footer">
                                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                        <a className="btn btn-primary" href="login.html">Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body >
        </div >
        )
}
export default VendorBiddingSystem;