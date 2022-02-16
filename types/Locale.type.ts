export type Locale = {
  common: {
    getStarted: string,
    createVote: string,
    aboutVotingMethods: string,
    description: string
  },
  index: {
    hero: {
      title: string,
      text: string
    },
    features: {
      title: string,
      imgSrc: string,
      text: string
    }[],
    info: {
      text: string
    }
  },
  details: {
    title: string,
    rules: {
      name: string,
      descriptions: string[]
    }[]
  },
  tech: {
    title: string,
    description: string,
    techs: string[]
  },
  changelog: {
    title: string
  },
  terms: {
    title: string
  },
  privacy: {
    title: string
  },
  footer: {
    sections: {
      title: string,
      pages: {
        title: string,
        url: string
      }[]
    }[]
  }
}