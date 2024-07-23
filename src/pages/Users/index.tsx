import  { useState, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISortConfig, ITableColumn } from 'components/Table/Table.types.ts';
import { useGetUsersQuery } from 'redux/apiSlices/users.slice.ts';
import { TUserUI } from 'redux/types/users.types.ts';
import useDebounce from 'hooks/useDebounce.ts';
import { ERoutePath } from 'routes/routes.types.ts';
import {EIconNames} from "components/Icon";
import Table from 'components/Table/index.tsx';
import Loading from "../../components/Loading";
import Page from 'components/Page/index.tsx';

// Define types for dynamically imported components
const HighlightedText = lazy(() => import('components/HighlitedText'));
const SStyledInput = lazy(() => import('./Users.styles.ts').then(module => ({ default: module.SStyledInput })));
const DeleteUser = lazy(() => import('./DeleteUser').then(module => ({ default: module.DeleteUser })));
const Icon = lazy(() => import('components/Icon').then(module => ({ default: module.Icon })));


const Users = () => {
    const navigate = useNavigate();
    const [sortConfig, setSortConfig] = useState<ISortConfig<TUserUI>>({ key: 'fullName', direction: 'asc' });
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetUsersQuery();
    const searchVal = useDebounce(search, 300);

    const columns: ITableColumn<TUserUI>[] = [
        {
            key: `fullName`,
            header: 'Full Name',
            sortable: true,
            width: '300px',
            render: ({ row }) => {
                return (
                    <div
                        className='pointer link'
                        onClick={() => navigate(`/${ERoutePath.USERS}/${row.id}`, { state: row })}
                    >
                        <HighlightedText highlight={search} text={row.fullName} />
                    </div>
                );
            }
        },
        {
            key: 'email',
            width: '300px',
            header: 'Email',
            sortable: true,
            render: ({ row }) => <HighlightedText highlight={search} text={row.email} />
        },
        { key: 'age', width: '150px', header: 'Age', align: 'center' },
        {
            key: 'actions',
            width: '100px',
            header: 'Actions',
            align: 'center',
            render: ({ row }) => (
                <DeleteUser id={row.id}>
                    <Icon size={20} icon={EIconNames.DELETE} />
                </DeleteUser>
            )
        }
    ];

    return (
        <Suspense fallback={<Loading />}>
            <Page title='Users' actions={
                <SStyledInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search by name,email...' />
            }>
                <Table
                    loading={isLoading}
                    columns={columns}
                    data={data?.content || []}
                    sortConfig={sortConfig}
                    onSortChange={setSortConfig}
                    currentPage={currentPage}
                    pageSize={10}
                    onPageChange={setCurrentPage}
                    filterKeys={['firstName', 'email']}
                    filterQuery={searchVal}
                />
            </Page>
        </Suspense>
    );
};

export default Users;
