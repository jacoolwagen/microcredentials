import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => <div>
        <ol><li>First item</li><li>Second item</li><li>Third item</li></ol></div>,
    isSnippet: true,
});
