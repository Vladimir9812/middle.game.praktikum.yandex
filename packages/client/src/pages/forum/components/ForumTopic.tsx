import { Box, Button, Flex } from '@chakra-ui/react';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as makeUUID } from 'uuid';

import { FormTextArea, Pagination } from '@app/components';

import mock from '../mock.json';

import { ForumTopicComment } from './ForumTopicComment';

type GridItemType = {
  id?: number | string /* пока что добавляю string для создания топика */;
  name?: string;
  dateOfCreate?: Date | string;
  commentsCount?: number;
  comments?: any;
};

const itemsPerPage = 5;

export function ForumTopic() {
  const [data, setData] = useState<GridItemType>();
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [inputText, setInputText] = useState('');
  const [itemOffset, setItemOffset] = useState(0);

  const parameters = useParams();

  useEffect(() => {
    const fetchData = async () =>
      new Promise((res) => {
        setTimeout(() => {
          const item = mock.data.allTheme.find((index) => String(index.id) === parameters.id);
          const newItem = {
            ...item,
            comments: mock.data.comments,
          };

          setData(newItem);
          res({});
        }, 1000);
      });
    fetchData();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setPaginatedItems(data?.comments ? data.comments.slice(itemOffset, endOffset) : []);
  }, [data, itemOffset]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % (data?.comments?.length || 1);
    setItemOffset(newOffset);
  };

  const onChange = useCallback((e: ChangeEvent) => {
    const element = e.target as HTMLInputElement;
    setInputText(element.value);
  }, []);

  const sendData = () => {
    const dataCopy = { ...data };

    dataCopy.comments.push({
      id: makeUUID(),
      name: 'Ivanessson',
      dateOfCreate: new Date().toISOString(),
      comment: inputText,
      commentsCount: dataCopy.commentsCount,
    });
    setData(dataCopy);
  };

  return (
    <Flex direction="column" justifyContent="space-between" h="100%">
      <Box h="100%" overflowY="auto" mb={5} mt={5}>
        {paginatedItems.map((index: any) => (
          <ForumTopicComment item={index} key={index.id} />
        ))}
      </Box>
      <Box>
        <Flex justifyContent="center">
          <FormTextArea
            name="topit-description"
            placeholder="Enter your message"
            isInvalid={false}
            onChange={onChange}
            fullWidth
          />
        </Flex>
        <Flex justifyContent="flex-end">
          <Button colorScheme="red" onClick={sendData}>
            Send
          </Button>
        </Flex>
        <Flex w="100%">
          <Pagination
            dataLength={data?.comments?.length}
            handlePageClick={handlePageClick}
            itemsPerPage={itemsPerPage}
          />
        </Flex>
      </Box>
    </Flex>
  );
}
