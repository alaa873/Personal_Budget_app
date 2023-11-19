import DataTable from 'react-data-table-component';
import AddExpenseModal from './ExpensesModel';
import ExbesnsesTableHook from '../Hooks/ExbesnsesTableHook';
import DataNull from './DataNull';



function AllExpensesTable() {
    const [
        columns,
        pending,
        showAddExpenseModal,
        setShowAddExpenseModal,
        exensiveModelId,
        setExensiveModelId,
        budget,
        expenses,
        deleteExpenses
    ] = ExbesnsesTableHook()


    return (
        <>
            {
                expenses.length > 0 ?
                    <DataTable
                        columns={columns}
                        title="All Expenses"
                        data={
                            expenses?.map((expense, index) => ({
                                uniqId: index + 1,
                                id: expense.id,
                                category: budget.find((bud) => bud.id === expense.budgetId)?.name,
                                budget: budget.find((bud) => bud.id === expense.budgetId)?.max,
                                date: expense.date,
                                description: expense.description,
                                title: expense.description,
                                amount: expense.amount
                            })
                            )
                        }
                        progressPending={pending}
                        highlightOnHover={true}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="68vh"
                        subHeader

                    />
                    :
                    <DataNull name="No Expenses" />

            }
            <AddExpenseModal
                show={showAddExpenseModal}
                infoByID={exensiveModelId}
                handleClose={() => setShowAddExpenseModal(false)}
            />
        </>
    );
}

export default AllExpensesTable