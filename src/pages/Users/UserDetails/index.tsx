import {useLocation, useNavigate} from 'react-router-dom';
import {TUserUI} from "redux/types/users.types.ts";
import {Page} from "components/Page";
import {Col, Row} from "components/Grid";
import Button from "components/Button";
import DeleteUser from "../DeleteUser";
import {SAvatar, SInfoItem, STitle} from './UserDetails.styles';
import {EIconNames} from "components/Icon";
import {lazy} from "react";

const EmptyState = lazy(() => import('components/EmptyState'))

const UserDetailsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state as TUserUI; // Assuming state is passed with user data

    if (!user) {
        return <EmptyState icon={EIconNames.USER} message='User data not found!'/>
    }
   const onDelete = () => {
    navigate(-1);
   }
    return (
        <Page isWithBack title={`${user.fullName}'s profile page`} actions={<DeleteUser onSuccess={onDelete} id={user.id}><Button>Delete {user.firstName} </Button></DeleteUser>}>
            <Row gutter={[16, 16]}>
                <Col>
                    <picture>
                        <source media="(min-width: 1200px)" srcSet={user.picture.large}/>
                        <source media="(min-width: 768px)" srcSet={user.picture.medium}/>
                        <SAvatar width={120} height={120} loading="lazy" src={user.picture.large} alt={`${user.fullName}'s avatar`}/>
                    </picture>

                </Col>
                <Col>
                    <STitle>{user.fullName}</STitle>
                    <STitle>Age: {user.age}</STitle>
                </Col>
                <Col span={24}>
                    <Row gutter={[32, 16]}>
                        <Col span={24}>
                            <STitle>Location:</STitle><SInfoItem> {user.location}</SInfoItem>
                        </Col>
                        <Col span={24}>
                            <STitle>Email:</STitle> <SInfoItem> {user.email}</SInfoItem>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Page>
    );
};

export default UserDetailsPage;
