import { Form, InputNumber, Popconfirm, Table, Typography, Input } from 'antd';
import styles from './list.module.scss';
import classNames from 'classnames/bind';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
const originData = JSON.parse(localStorage.getItem('listUsers_CCPM')) || [];
// const originData = [];
// for (let i = 0; i < 500; i++) {
//     originData.push({
//         key: i.toString(),
//         name: `Edward ${i}`,
//         age: 32,
//         address: `London Park no. ${i}`,
//     });
// }
const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};
function ListUser() {
    const cx = classNames.bind(styles);
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [count, setCount] = useState(0);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.key === editingKey;
    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            age: '',
            address: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const handleAdd = () => {
        const newData = {
            key: count,
            name: ``,
            age: '',
            address: ``,
        };
        setData([...data, newData]);
        setCount(count + 1);

        setEditingKey(newData.key);
    };

    const handleDelete = (key) => {
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            newData.splice(index, 1);
            setData(newData);
            localStorage.setItem('listUsers_CCPM', JSON.stringify(newData));
        }
    };

    const cancel = () => {
        setEditingKey('');
    };
    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
            localStorage.setItem('listUsers_CCPM', JSON.stringify(newData));
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            width: '15%',
            editable: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: '40%',
            editable: true,
        },
        {
            title: 'Actions',
            dataIndex: 'Actions',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </Typography.Link>
                        <Typography.Link
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Cancel
                        </Typography.Link>
                    </span>
                ) : (
                    <span>
                        <Typography.Link
                            disabled={editingKey !== ''}
                            onClick={() => edit(record)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Edit
                        </Typography.Link>

                        <Typography.Link
                            onClick={() => handleDelete(record.key)}
                        >
                            Delete
                        </Typography.Link>
                    </span>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <div className={cx('list-user')}>
            <div className={cx('title')}>
                <h1>LIST USER</h1>
                <div className={cx('action')}>
                    <PlusCircleOutlined
                        onClick={() => {
                            handleAdd();
                        }}
                        style={{
                            margin: 'auto',
                            color: '#08c',
                        }}
                    />
                </div>
            </div>
            <Form form={form} component={false}>
                <Table
                    color="red"
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </div>
    );
}
export default ListUser;
