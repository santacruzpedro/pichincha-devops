FROM public.ecr.aws/lambda/nodejs:16

COPY index.js ${LAMBDA_TASK_ROOT}/
COPY package.json ${LAMBDA_TASK_ROOT}/
RUN npm install --verbose --target ${LAMBDA_TASK_ROOT}

CMD [ "index.handler" ]