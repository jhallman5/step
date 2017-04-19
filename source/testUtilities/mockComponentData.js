const mockCouldDos = {
  1: {
    id: 1,
    text: 'give unsolicited advice to people',
  },
  2: {
    id: 2,
    text: 'make a painting',
  },
  3: {
    id: 3,
    text: 'sculpt creature from super sculpy',
  },
}

const mockProjects = {
  1: {
    id: 1,
    text: 'learn to chortle',
    couldDos: mockCouldDos
  },
  2: {
    id: 2,
    text: 'learn to be creative while fearing for your livelihood',
    couldDos: mockCouldDos
  },
  3: {
    id: 3,
    text: 'enter the danger zone',
    couldDos: mockCouldDos
  },
  4: {
    id: 4,
    text: 'break into someone\'s house and organize thier stuff',
    couldDos: mockCouldDos
  }
}

const mockGlobalState = {
  userId: 1,
  currentProjectId: 2,
  projects: mockProjects,
  currentCouldDoId: 1
}

export { mockGlobalState, mockProjects, mockCouldDos }
