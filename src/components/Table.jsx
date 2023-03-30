import React from "react";
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'Сергей',
    lastName: 'Емельянов',
    age: 30,
    address: 'СПБ/Москва',
    tags: ['Технический директор Всея Руси', 'Босс']
  },
  {
    key: '2',
    firstName: 'Кирилл',
    lastName: 'Сысоев',
    age: 30,
    address: 'СПБ',
    tags: ['Мозг всей операции']
  },
  {
    key: '3',
    firstName: 'Дмитрий',
    lastName: 'Пилявский',
    age: 5,
    address: 'СПБ',
    tags: ['Личинка джуна', 'Юный падаван']
  },
];

const OurTable = () => (
  <Table dataSource={data}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);

export default OurTable;
