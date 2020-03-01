window.config = {
  // default: '/'
  routerBasename: '/',
  whiteLabelling: {},
  // default: ''
  showStudyList: true,
  servers: {
    dicomWeb: [
      {
        name: 'DCM4CHEE',
        wadoUriRoot: 'http://15.165.171.194:8080/dcm4chee-arc/aets/DCM4CHEE/wado',
        qidoRoot: 'http://15.165.171.194:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
        wadoRoot: 'http://15.165.171.194:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        requestOptions: {
          auth: 'admin:admin',
        },
      },
    ],
  },
  studyListFunctionsEnabled: true,
};
