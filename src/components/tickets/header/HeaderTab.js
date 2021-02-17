const HeaderTab = ({ tabName, isClicked, clicked }) => {
    return (
        <div
            className=
            {isClicked ? 'header__tab active-tab' : 'header__tab'}
            onClick={() => clicked(tabName)}
            data-testid='data-tab'
        >
            {tabName}
        </div>
    )
};

export default HeaderTab;