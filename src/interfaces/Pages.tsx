export interface IndexInterface {
     posts: {
      nodes: {
      excerpt: string
      uri: string
      date: string
      title: string
      map: any
      featuredImage: {
        node: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: {
                placeholder: string
                layout: string
                quality: number
                aspectRatio: number
              }
            }
          }
        }
      }
      }
    }  
}

export interface BlogInterface {
    blogPosts: {
      nodes: {
      excerpt: string
      uri: string
      date: string
      title: string
      map: any
      featuredImage: {
        node: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: {
                placeholder: string
                layout: string
                quality: number
                aspectRatio: number
              }
            }
          }
        }
      }
      }
    }  
}

export interface ExerciseInterface {
    exercisePosts: {
      nodes: {
      excerpt: string
      uri: string
      date: string
      title: string
      map: any
      featuredImage: {
        node: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: {
                placeholder: string
                layout: string
                quality: number
                aspectRatio: number
              }
            }
          }
        }
      }
      }
    }  
}
