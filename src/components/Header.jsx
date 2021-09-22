import React from "react";
import {
	Container,
	FormControl,
	Navbar,
	Dropdown,
	Badge,
	Nav,
	Button,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css"

const Header = () => {

	const{
		state:{cart}, dispatch
	} = CartState();

	return (
		<Navbar bg="dark" variant="dark" style={{ height: 80 }}>
			<Container>
				<Navbar.Brand>
					<Link to="/">Shopping Cart</Link>
				</Navbar.Brand>

				<Navbar.Text className="search">
					<FormControl
						className="m-auto"
						style={{ width: 500 }}
						placeholder="Search a product"
					/>
				</Navbar.Text>

				<Nav>
					<Dropdown alignRight>
						<Dropdown.Toggle variant="success">
                        <FaShoppingCart  fontSize="25px" />
							<Badge>{cart.length}</Badge>
						</Dropdown.Toggle>

						<Dropdown.Menu style={{ minWidth: 370 }}>
							{cart.length > 0? (
							<>
								{cart.map((prod)=>(
								<span className="cartItem" key={prod.id} >
									<img src={prod.image} className="cartItemImg" alt={prod.name} />
									<div className="cartItemDetail">
										<span>{prod.name}</span>
										<span>&#8377;{prod.price.split(".")[0]}</span>
									</div>

									<AiFillDelete fontSize="20px" style={{cursor: "pointer"}} onClick={()=> dispatch({
										type: "REMOVE_FROM_CART",
										payload:prod,
									})
									} />
								</span>
							))}
							<Link to="/cart">
								<Button style={{width: "95%", margin:"0 10px"}}>Go To Cart</Button>
							</Link>

							</>
							):(<span style={{ padding: 10 }}>Cart is Empty!</span>)}	
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;