import { Button, Collapse, Typography } from "antd";
import { styled } from "styled-components";
import { PlusSquareOutlined } from '@ant-design/icons';
import { useContext } from "react";
import { AppContext } from '../../../../Context/AppProvider'

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-header, p {
            color: white;
        }

        .ant-collapse-content-box {
            padding: 0 40px;
        }

        .add-room {
            color: white;
            padding: 0;
        }
    }
`

const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`

function RoomList() {
    const { rooms, setIsAddRoomVisible } = useContext(AppContext);
    const handleOpenAddRoomModal = () => {
        setIsAddRoomVisible(true);
    }
    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="Danh sách các phòng" key='1'>
                {
                    rooms.map(room => <LinkStyled key={room.id}>{room.name}</LinkStyled>)
                }
                <Button type="text" icon={<PlusSquareOutlined />} className="add-room" onClick={handleOpenAddRoomModal}>Thêm phòng</Button>
            </PanelStyled>
        </Collapse>
    );
}

export default RoomList;