import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Link } from 'react-router-dom';
import BlockAssest from './BlockAssest';


const options = {
    renderText: (text) => {
        return text.split('\n').reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    },
    renderMark: {
        [MARKS.CODE]: (text) => {
            return (
                <pre>
                    <code>{text}</code>
                </pre>
            );
        },
    },
    rederMode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
            if (node.content.find((item) =>
                item.marks?.find((mark) => mark.type == "code"))) {
                return (
                    <div>
                        <pre>
                            <code>{children}</code>
                        </pre>
                    </div>
                )
            }
            return <p>{children}</p>


        }

    },
    [INLINES.ENTRY_HYPERLINK]: (node) => {
        if (node.data.target.sys.contentType.sys.id ==="post") {
            return (
                <Link href={`/posts/${node.data.target.fields.slug}`}>
                    {node.data.target.fields.title}
                </Link>
            )

        }
    },
    [INLINES.HYPERLINK]: (node) => {
        const text = node.content.find((item) => item.nodeType ==="text")?.value;
        <a href={node.data.url} target='_blank'>
            {text}
        </a>
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
            return (
                <iframe src={node.data.target.fields.embedUrl}
                    height={400}
                    width="100%"
                />
            )
        }

    },
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
          return (
             <img
             src={`https:${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}/>
          )
            
         
            
        }
      }
    
}
function RichText({content}) {
    
  return (
  
        <>
        {
            documentToReactComponents(content,options) 
        }
        </>
      
    
  )
}

export default RichText
