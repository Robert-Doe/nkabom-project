import CoordinatorNav from "../../../../template/reusables/CoordinatorNav";
import CoordinatorSideNav from "../CoordinatorSideNav";

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