import CoordinatorSideNav from "../CoordinatorSideNav";
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";

function ViewAllInternsPage(){
    return(
        <section>
            <CoordinatorNav/>
            <main className={'coordinator-main'}>
                <CoordinatorSideNav/>
                <aside className={'main-body'}>
                </aside>
            </main>
        </section>
    )
}
export default ViewAllInternsPage;