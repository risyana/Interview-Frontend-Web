import { Table, Tag, Input } from 'antd';
import { useState, useEffect } from 'react'
const {Search} = Input

const columns = [
  {title: 'ID', dataIndex: 'id', key: 'id' },
  {title: 'Category', dataIndex: 'category', key: 'category' },
  {title: 'Title', dataIndex: 'title', key: 'title' },
  {title: 'Description', dataIndex: 'description', key: 'description' },
  {title: 'Footer', dataIndex: 'footer', key: 'footer' },
  {title: 'Tags', dataIndex: 'tags', key: 'tags',
    render:(text, record) => (
      <ul>
        {(record.tags && record.tags.length > 0) && record.tags.map(tag => (
          <li key={tag}>
            <Tag color="blue" >
              {tag}
            </Tag>
          </li>
        ))}
      </ul>
    )
  }
];

export default function Q2(props) {
  const { data } = props
  const [keyword, setKeyword] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  const filterTable = (originalData, keyword) => {
    const filtered =  keyword 
      ? originalData.filter(d => {
          return (
            d.id && d.id.toString().toUpperCase().includes(keyword.toUpperCase()) ||
            d.category && d.category.toString().toUpperCase().includes(keyword.toUpperCase()) ||
            d.title && d.title.toUpperCase().includes(keyword.toUpperCase()) ||
            d.description && d.description.toUpperCase().includes(keyword.toUpperCase()) ||
            d.footer && d.footer.toUpperCase().includes(keyword.toUpperCase()) ||
            d.tags && d.tags.join(' ').toUpperCase().includes(keyword.toUpperCase())
          )
        })
      : originalData

    setFilteredData(filtered)
  }

  useEffect(() => {
    filterTable(data, keyword)
  }, [keyword, data])

  return (
    <>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <h2 style={{textAlign: 'left'}}>    
          Question 2
        </h2>
        <Search 
          size="large"
          placeholder="Search" 
          value={keyword} 
          onChange={(e) => setKeyword(e.target.value)} 
          style={{ width: 400 }} 
        />
      </div>
      <Table columns={columns} pagination={{defaultPageSize: 5, position:['bottom', 'left']}} dataSource={filteredData} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://screening.moduit.id/frontend/web/question/two')
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}