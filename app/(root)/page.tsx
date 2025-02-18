import HeaderBox from '@/components/HeaderBox';
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';


const Home = async () => {
    const loggedIn = await getLoggedInUser();
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.name || 'Guest'}
                        subtext="Access and Manage your account and transactions"
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={9000.12} 
                    />

                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSideBar 
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 1450.00},{ currentBalance: 1542.23}]}
            />
        </section>
    )
}

export default Home;