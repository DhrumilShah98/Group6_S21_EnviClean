function NavBarDropDownItemComponent(props) {

    const menu_data = props.menu_data.menu_items;
    const construct_dropdown_list = menu_data.map((menu) =>
        <div id={menu.id} className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href={menu.url}>
                {menu.title}
            </a>
            <div className="navbar-dropdown">
                {
                    menu.item_data.map((item) =>
                            <a className="navbar-item" href={item.url}>
                                {item.name}
                            </a>
                    )
                }
            </div>
        </div>
    );

    return (
        <div className="navbar-end">
            {construct_dropdown_list}
        </div>
    );
}

export default NavBarDropDownItemComponent;