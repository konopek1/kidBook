const marginDefault = '1em';

export default {
  paperMessage: (isSessionUserMessage: boolean = true) => {
    const marginLeft = !isSessionUserMessage ? marginDefault : 'auto';
    const marginRight = isSessionUserMessage ? marginDefault : 'auto';
    const backgroundColor = isSessionUserMessage ? '#FDDFDF' : '#DEF3FD';
    return {
      width: '80%',
      marginLeft,
      marginTop: '0.7em',
      marginRight,
      backgroundColor,
    };
  },
  contentMessage: (isSessionUserMessage: boolean = true) => {
    const align = !isSessionUserMessage ? 'left' : 'right';
    return {
      padding: '0.5em 1em 0.5em 1em',
      align,
    };
  },
  captionMessage: (isSessionUserMessage: boolean = true) => {
    const marginLeft = !isSessionUserMessage ? marginDefault : 'auto';
    const marginRight = isSessionUserMessage ? marginDefault : 'auto';
    const paddingLeft = !isSessionUserMessage ? marginDefault : '0em';
    const paddingRight = isSessionUserMessage ? marginDefault : '0em';
    return {
      marginLeft,
      marginRight,
      color: 'gray',
      paddingRight,
      paddingLeft,
      fontSize: '0.70em',
    };
  },
  captionMessageWrapper: (isSessionUserMessage: boolean = true) => {
    const textAlign = !isSessionUserMessage ? 'left' : 'right' as 'left' | 'right';
    return {
      textAlign,
    };
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    input: {
      padding: '0.1em 0.5em',
      width: '80%',
    },
  },

};
