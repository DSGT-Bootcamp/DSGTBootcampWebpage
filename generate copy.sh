openapi-generator generate \
        -g spring \
        --library spring-boot \
        -i dsgt.yaml \  
        -o ~/ \
        -p groupId=com.example.dsgt_bootcamp_webpage \
        -p artifact=dsgt \
        -p artifactVersion=1.0.0-SNAPSHOT \
        \
        -p basePackage=com.example.dsgt \
        -p configPackage=com.example.dsgt.config \
        -p apiPackage=com.example.dsgt.api \
        -p modelPackage=com.example.dsgt.model \
        \
        -p sourceFolder=src/main/gen \
        \
        -p dataLibrary=java8 \
        -p java8=true