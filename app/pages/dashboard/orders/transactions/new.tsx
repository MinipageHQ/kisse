import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createTransaction from "app/transactions/mutations/createTransaction"
import { TransactionForm, FORM_ERROR } from "app/transactions/components/TransactionForm"

const NewTransactionPage: BlitzPage = () => {
  const router = useRouter()
  const [createTransactionMutation] = useMutation(createTransaction)

  return (
    <div>
      <h1>Create New Transaction</h1>

      <TransactionForm
        submitText="Create Transaction"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateTransaction}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const transaction = await createTransactionMutation(values)
            router.push(Routes.ShowTransactionPage({ transactionId: transaction.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.TransactionsPage()}>
          <a>Transactions</a>
        </Link>
      </p>
    </div>
  )
}

NewTransactionPage.authenticate = true
NewTransactionPage.getLayout = (page) => <Layout title={"Create New Transaction"}>{page}</Layout>

export default NewTransactionPage
